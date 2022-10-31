import React from 'react';

window.addEventListener("load", () => {
  console.log("called");
})

const CreateTextWithProps = ({ text, ASCIIChar, ...props }) => {
    return (
      <span {...props}>
       {text}{ASCIIChar}
      </span>
   )
   }
   const RepeatCharacters = ({ times, children }) => {
    console.log({ times, children });
    return React.cloneElement(children, {
      // This will override the original ASCIIChar in the text.
      ASCIIChar: children.props.ASCIIChar.repeat(times),
   })
   }

   const Button = () => {
    return (
      <button type="button" style={{ padding: "10px" }}>
        This is a styled button
      </button>
   )
   }

   // some new example where we can add different as props 

   

   const defaultMessage = 'Website of Habdul Hazeez';

   const DefaultHeader = () => {
    return(
        <div>
        <p>some text</p>
        </div>
    )
   }

   const BigHeader = ({message = "some message"}) => {
      return(
        <div>
          {message}
        </div>
      )
       
   }

   const Header = ({hero = <DefaultHeader />}) => {
    // console.log(props);
    return(
        <>
        {/* {children} */}
        <div>
            {React.cloneElement(hero, { color: "#1560bd"})}
        </div>
        </>
    )
   }

   const HomePage = () => {
    return (
   
   <Header hero={<BigHeader message="This is the home page" />} />
   )
   }

   const CreateElements = () => {
    return(
      // React.createElement("<h1>hello hello</h1>")
      React.createElement("input")
    )
   }

   function Demo2() {
    let data = {
        onClick: () => { 
          alert("You are making progress!!!")
        }
     }
   
 
    return (
        <>
      <div>
        <RepeatCharacters times={3}>
          <CreateTextWithProps
            text="nEERAJ sINGH"
            ASCIIChar='.'
            />
        </RepeatCharacters>
      </div>
      <section>
        {React.cloneElement(<Button></Button>, data, <>
           Styled button with onClick
           <h2>wdwdw</h2>
         </>)}
      </section>
      <section>
        {/* <Header >
            <DefaultHeader></DefaultHeader>
        </Header>
        <BigHeader message = {"dwdwd"} ></BigHeader> */}
        {/* <Header hero={<BigHeader message="This is the home page" />} /> */}
        <HomePage></HomePage>
        <CreateElements></CreateElements>
      </section>
      </>
   )
   }
   export default Demo2