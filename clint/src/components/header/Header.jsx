import "./header.css"

export default function Header() {
  return (
    <div>
      <>
         <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://i.pinimg.com/736x/e9/6b/a0/e96ba05314ba0c83fb0b769bae502ad4--morning-sunrise-morning-light.jpg" alt="" />
         </div>
      </>
    </div>
  )
}
