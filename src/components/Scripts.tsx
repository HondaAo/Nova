import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { json } from "stream/consumers";
interface ScriptProps {
    scripts: ScriptInterface[],
    skipTo: () => void,
    nextScript: (direction: string) => Promise<void>,
    play: boolean,
    setPlay: Dispatch<SetStateAction<boolean>>,
    showId: number
}

const Script: React.FC<ScriptProps> = ({scripts, skipTo, nextScript, play,setPlay,showId}) => {
    const scriptsLength = scripts.length;
    let realText;
    if(scripts.length != 0) {
        realText = (scripts[showId].text.replaceAll(".", ".\n"))
        realText = (realText.replaceAll("?", "?\n"))
        realText = ' ' + realText
    }
    useEffect(() => {
        const interval = setInterval(skipTo, 800); 
        return () => {
          clearInterval(interval);
        };
    }, [skipTo]);
    return (
        <div className="script-container">
          <div className="left-button-container" onClick={() =>nextScript('left')}>
            {showId != 0 && ( <span>{'<'}</span> )}
          </div>
          <div className="text-container" onClick={(prev) => {
              setPlay(prev => !prev)
            //   document.getElementsByClassName('ytp-pause-overlay')[0].innerHTML = '';
            //   document.getElementsByClassName('ytp-watermark')[0].innerHTML = '';
            //   document.getElementsByClassName('ytp-chrome-top')[0].innerHTML = '';
            }}>
            {scripts.length != 0 ? (
            <span style={{ fontSize: '17px', fontWeight: '600', whiteSpace: 'pre-line', textAlign: 'left', lineHeight: '2.5'}}>
                {realText}
            </span>
            ) : (
                <div></div>
            )}
          </div>
          <div className="right-button-container"  onClick={() =>nextScript('right')}>
            {showId != scripts.length - 1 && ( <span>{'>'}</span> )}
          </div>
        </div>
    )
}

export default Script