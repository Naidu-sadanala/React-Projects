import TableCon from "./TableCon"
function Logic(props) {
    var matches=[]
    var dateArray=[]
    var date = new Date("June 20, 2023");

    const lst = props.teams
    const round=(lst)=>{
        var secondTeam = String(lst.splice(1,1))
        lst.push(secondTeam)
        return(lst)
    }

    const match=(lst)=>{
        var end = lst.length-1
        for(let i =0; i <= end; i++){
            if(end>i){
                matches.push(lst[i] + " vs " + lst[end])
                dateArray.push(date.toDateString())
                date.setDate(date.getDate()+1)
                end-=1
            }
        }
    }
    for(let i = 0; i<lst.length-1;i++){
        match(lst);
        round(lst);
    }

  return (
    <div>
        <TableCon matches={matches} dateArray={dateArray}/>
    </div>
  )
}

export default Logic