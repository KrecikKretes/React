import React, {Component} from 'react'
//import jsonData from '../res/text.json'
//import jsonData2 from '../res/text2.json'
import {navButton} from './navButton'



class CContents extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: '1'
        }
       

/*
        this.txtData = () => JSON.parse(JSON.stringify(jsonData));
        this.txtData2 = () => JSON.parse(JSON.stringify(jsonData2));
       
        
        const imgContext = require.context('../res/', false, /\.png$/);
        let img = {};
        this.imgs = imgContext.keys().reduce( (icons, file) => {
            const cname = imgContext(file).default;
            const label = file.slice(2,-4);
            img[label] = cname;
            return img;
        }, {});
        
*/    
        //this.changeMsg = this.changeMsg.bind();
    }

    render(){

        /*
        const items = [];
        for(let i = 0; i<this.txtData().count; i++){
            let value = this.txtData().text[i];
            items.push(
                <div className="contentsFlex">
                    <img className="contentsFlexImg" src={this.imgs['img' + (i+1)]} alt=""/>
                    <p className="contentsFlexTxt">{value}</p>
                </div>
            );
        }
         
        const imgg = '../res/';
        const tabData = this.txtData2().data;
        const items = tabData.map((item, i) => (
            <div key={i} id={`"div${item.id}"`} className="contentsFlex">
                <img className="contentsFlexImg" src={require(`../res/${item.img}.png`)} key={i} alt=""/> 
                <p className="contentsFlexTxt">{item.text}</p>
            </div>
        ));
*/      

        
        
        return (
            <div className='contentsDivClass'>
                <div className="contentDivClassPage">
                    {this.state.message}
                </div>
            </div>

        )
    }
}

export default CContents