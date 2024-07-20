import React from "react"

const styles = {
  textContainer: {
    fontSize: '14px',
    position: 'absolute' as 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    left: '0',
    bottom: '0',
    maxHeight: '22px'
  }
}

export default function BottomInfo(props: {server: string, listeners?: [{name: string, isHost: boolean, watchingAD: boolean}], loading?: boolean}) {
  return <div style={styles.textContainer}>
    {
      !!props.server ? <>
        <span style={{maxHeight: '22px', overflow: 'hidden', maxWidth: '50%'}}>{`${props.loading ? "Tentando conectar" : "Escutando juntos"} em ${props.server}`}</span>

        {props.loading ? <></> : <span style={{maxHeight: '22px', overflow: 'hidden', maxWidth: '50%'}}>{`Participantes: `} {
          props.listeners ? props.listeners.map((listener, i) => {
            let color = ""
            let title = "Participante"
            if (listener.isHost && listener.watchingAD) {
              color = "LimeGreen"; 
              title = "Host e assistindo um AD";
            } else if (listener.watchingAD) {
              color = "LimeGreen";
              title = "Assistindo um AD";
            } else if (listener.isHost) {
              color = "Orange";
              title = "Host";
            }

            return <span key={i} title={title} style={{color: color}}>{listener.name + (i !== props.listeners!.length-1 ? ", " : "")}</span>
          }) : ""
        }
        </span>}
        
      </>
      : <></>
    }
    
  </div>
}