import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"
import AssignmentIcon from "@material-ui/icons/Assignment"
import PhoneIcon from "@material-ui/icons/Phone"
import React, { useEffect, useRef, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Peer from "simple-peer"
import { getVchat } from "../../redux/actions/vchat"
import io from "socket.io-client"
import { useSelector,useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

const socket = io.connect('http://localhost:5000')

function Video() {
	const {vchatData} = useSelector((state) => ({vchatData:state.vchatR.vchatData}))  
	const {loading} = useSelector((state) => ({vchatData:state.vchatR.loading}))  

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [ me, setMe ] = useState("")
	const [ idToCall, setIdToCall ] = useState("")
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState("")
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()
	let { id } = useParams();
	const Loading=()=>{
		console.log('...loading')
	}
	useEffect(() => {
		dispatch(getVchat(navigate,id))
		loading?Loading():setIdToCall(vchatData.VchatId)
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream)
				myVideo.current.srcObject = stream
		})
		socket.on("me", (id) => {
			// vchatData.VchatId
				setMe(id)
			})

		socket.on("callUser", (data) => {
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})
		
	}, [])

	const callUser = (id) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: name
			})
		})
		peer.on("stream", (stream) => {
			
				userVideo.current.srcObject = stream
			
		})
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true)
			peer.signal(signal)
		})

		connectionRef.current = peer
	}

	
	const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
	}

	return (
		<>
		<div className="container">
			<div className="video-container">
				<div className="video">
					{stream &&  <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />}
				</div>
				<div className="video">
					{callAccepted && !callEnded ?
					<video playsInline ref={userVideo} autoPlay style={{ width: "300px"}} />:
					null}
				</div>
			</div>
			<h1 style={{ textAlign: "center", color: '#fff' }}>{vchatData?.VchatId}</h1>
			<div className="myId">
				<TextField
					id="filled-basic"
					label="ID to call"
					variant="filled"
					value={idToCall}
					onChange={(e) => setIdToCall(e.target.value)}
				/>
				<div className="call-button">
					{callAccepted && !callEnded ? (
						<Button variant="contained" color="secondary" onClick={leaveCall}>
							End Call
						</Button>
					) : (
						<IconButton color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
							<PhoneIcon fontSize="large" />
						</IconButton>
					)}
					{idToCall}
				</div>
			</div>
			
		</div>
		</>
	)
}

export default Video