import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"
import AssignmentIcon from "@material-ui/icons/Assignment"
import PhoneIcon from "@material-ui/icons/Phone"
import React, { useEffect, useRef, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Peer from "simple-peer"
import io from "socket.io-client"
import { useSelector,useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteVChat,createVchat } from "../../redux/actions/vchat"
import { getVchat } from "../../redux/actions/vchat"

const socket = io.connect('http://localhost:5000')
function VideoJ() {
	const {vchatData} = useSelector((state) => ({vchatData:state.vchatR.vchatData}))  
    const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))
    const dispatch = useDispatch()
    const navigate = useNavigate()

	const [ me, setMe ] = useState("")
    const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState()
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState("")
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()

	useEffect(() => {
		
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream)
				myVideo.current.srcObject = stream
		})
		
        socket.on("me", (id) => {
			setMe(id)

			const formData = {
				"VchatId": id,
				"JobseekerId": profileData.user.JobseekerId
			}
			dispatch(deleteVChat(navigate,profileData.user.JobseekerId))
			dispatch(createVchat(navigate,formData))
			}
		)    
		  

		socket.on("callUser", (data) => {
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})
		
	}, [])
    
	const answerCall =() =>  {
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}
	
	const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
	}

	return (
		<>
			<h1 style={{ textAlign: "center", color: '#fff' }}>Zoomish</h1>
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
			<div className="myId">
				<div className="call-button">
					{callAccepted && !callEnded ? (
						<Button variant="contained" color="secondary" onClick={leaveCall}>
							End Call
						</Button>
					) : (
						<div>
							
						</div>
					)}
					{idToCall}
				 </div>

				
			</div>
			<div>
				{receivingCall && !callAccepted ? (
						<div className="caller">
						<h1 >employer is calling...</h1>
						<Button variant="contained" color="primary" onClick={answerCall}>
							Answer
						</Button>
					</div>
				) : null}
			</div>
		</div>
		</>
	)
}
export default VideoJ