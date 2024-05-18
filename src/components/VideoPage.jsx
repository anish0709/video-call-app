import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import dotenv from "dotenv";
const VideoPage = () => {
    const { id } = useParams();
    const roomID = id;
    // dotenv.config();
    let myMeeting = async (element) => {
        // generate Kit Token
        const appID = 8502701;
        const serverSecret = "aeca03b4bbc7dd3fa3fe130e3b05a024";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "anishmernstack");

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy link',
                    url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });
    };

    return (
        <div ref={myMeeting}>
        </div>
    );
}

export default VideoPage;
