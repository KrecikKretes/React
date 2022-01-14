export function navButton(page){
    if(page === '1'){
        console.log('1');
        return (
            this.setState({message: "Bu"})
        )
    }
    if(page === '2'){
        console.log('2');
        return (  
            this.setState({message: "Buuu"})
        )
        
    }
    if(page === '3'){
        console.log('3');
        return (
            <div className="contentDivClassPage">
                Page3
            </div>
        )
    }
    if(page === '4'){
        console.log('4');
        return (
            <div className="contentDivClassPage4">
                Page4
            </div>
        )
    }
    
}