const Loading = ({HeaderDisable}) => {
    HeaderDisable()
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = month+'-'+day+'-'+year 
    // 년월일
    var hours = ('0' + today.getHours()).slice(-2); 
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var seconds = ('0' + today.getSeconds()).slice(-2); 
    var Mseconds = ('0' + today.getMilliseconds()).slice(-2);
    var timeString = hours+':'+minutes+':'+seconds+'.'+Mseconds;
    // 시분초 밀리초
    return ( 
        <div id='loading'>
            <p>Current date is Tue&nbsp;&nbsp;{dateString}</p>
            <p>Enter new date :</p>
            <p>Current time is {timeString}</p>
            <p className="MarginText">Enter new time:</p>
            <p>The Republic Of Coding DOS</p>
            <p>Version 0.80 (C)Copyright ROFC Corp 1981, 1982, 1983</p>
            <p className="MarginTextTwo">A&gt;dir</p>
            <p>&nbsp;&nbsp;Volume in drive A has no label</p>
            <p className="MarginTextThree">&nbsp;&nbsp;Directory of A:\</p>
            <p className='loadingText'>THREE.JS&nbsp;COM&nbsp;&nbsp;&nbsp;17764&nbsp;&nbsp;&nbsp;11-19-23&nbsp;&nbsp;12:00p</p>
            <p className='loadingText'>REACT&nbsp;&nbsp;&nbsp;&nbsp;COM&nbsp;&nbsp;&nbsp;&nbsp;6016&nbsp;&nbsp;&nbsp;11-19-23&nbsp;&nbsp;12:00p</p>
            <p className='loadingText'>JS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COM&nbsp;&nbsp;&nbsp;&nbsp;6400&nbsp;&nbsp;&nbsp;11-19-23&nbsp;&nbsp;12:00p</p>
            <p className='loadingText'>JSX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COM&nbsp;&nbsp;&nbsp;&nbsp;1408&nbsp;&nbsp;&nbsp;11-19-23&nbsp;&nbsp;12:00p</p>
            <p className='loadingText'>CSS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COM&nbsp;&nbsp;&nbsp;11904&nbsp;&nbsp;&nbsp;11-19-23&nbsp;&nbsp;12:00p</p>
            <p className='loadingText'>NPM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32&nbsp;&nbsp;&nbsp;11-19-23&nbsp;&nbsp;12:00p</p>
          </div>
     );
}
 
export default Loading;