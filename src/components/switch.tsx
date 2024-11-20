export const ModeSwitch =(props:any) =>{

    // .switch {
    //     position: relative;
    //     display: inline-block;
    //     width: 60px;
    //     height: 34px;
    //   }
      
    //   /* Hide default HTML checkbox */
    //   .switch input {
    //     opacity: 0;
    //     width: 0;
    //     height: 0;
    //   }
      
    //   /* The slider */
    //   .slider {
    //     position: absolute;
    //     cursor: pointer;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     background-color: #1DB704;
    //     -webkit-transition: .4s;
    //     transition: .4s;
    //   }
      
    //   .slider:before {
    //     position: absolute;
    //     content: "";
    //     height: 26px;
    //     width: 26px;
    //     left: 4px;
    //     bottom: 4px;
    //     background-color: white;
    //     -webkit-transition: .4s;
    //     transition: .4s;
    //   }
      
    //   input:checked + .slider {
    //     background-color: #FF0000;
    //   }
      
    //   input:focus + .slider {
    //     box-shadow: 0 0 1px #2196F3;
    //   }
      
    //   input:checked + .slider:before {
    //     -webkit-transform: translateX(26px);
    //     -ms-transform: translateX(26px);
    //     transform: translateX(26px);
    //   }

    return(
        <label className="switch relative inline-block w-[60px] [w-34px]" id ="darkSlider">
            <input className="w-0 h-0 opacity-0" type="checkbox" id="displaySlider"/>
            <span className="slider"></span>
        </label>
    );
}