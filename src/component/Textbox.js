import React,{useState} from 'react' 

export default function Textbox(props) {
  const [text,setText]=useState('')
  const [textChange,settextChange]=useState('')

  let writingMode=(event)=>{
    let newText=event.target.value
    newText.trim()
    setText(newText)
  }

  let changeMode=(event)=>{
    let newText=event.target.value
    settextChange(newText)
  }

  let convertToUpper=()=>{
    let newText=text.toUpperCase()
    setText(newText)
    props.changeAlert('Converted to uppercase','success')
  } 

  let convertToLower=()=>{
    let newText=text.toLowerCase()
    setText(newText)
    props.changeAlert('Converted to lowercase','success')
  }

  let clearText=()=>{
    let newText=''
    setText(newText)
    cleanText()
    props.changeAlert('Textbox Cleared','warning')
  }

  let cleanText=()=>{
    let newText=''
    settextChange(newText)
    props.changeAlert('Wordbox Cleared','success')
  }

  let textReplace=()=>{
    let oldText=textChange.split(',')[0]
    let modText=textChange.split(',')[1]
    let newText=text.replace(oldText,modText)

    newText.trim()  //to remove extra white spaces

    setText(newText)
    props.changeAlert('Word Replaced','success')
    
    
    
    

  }



  return (
    <>
    <div >
      <div className='container'>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={writingMode}></textarea>
          </div>
          <textarea className="form-control my-2" id="exampleFormControlTextarea1" rows="1" value={textChange} onChange={changeMode}></textarea>
          
          
          <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={convertToUpper}>Convert to uppercase</button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={convertToLower}>Convert to lowercase</button>
          <button className="btn btn-danger mx-1 my-1" disabled={text.length===0} onClick={clearText}>Clear Text</button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={textReplace}>Replace</button>
          <button className="btn btn-danger mx-1 my-1"  disabled={text.length===0} onClick={cleanText}>Clean</button>
      </div>

      
      <div className="container">
        <h1 className='my-2'>Your text summary</h1>
        <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{(0.008 * (text.split(' ').length)).toFixed(2)} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
    
    </>
  ) 
}
