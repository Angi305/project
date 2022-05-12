import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClickableDiv from 'react-clickable-div'


export class TodoItem extends Component {


    getStyle=(todo)=>{
       return {
        backgroundColor: todo.completed?`rgb(255,165,0)`:`#bf0c06`,
        textDecoration: todo.completed?'line-through':'none',
        borderBottom: `1px  `,
        padding:`10px`,
        color:'white',
        outlineColor: ' black',
        textAlign: `center`,
        textShadow: `1px 2px black`,
        width: `20em`,
        position: `auto`,
        marginTop: `1em`,
        borderRadius: '1px 5px',
        marginLeft:` 35em`
        

       }
    }

    render() {

        const {id ,title}=this.props.todo

        return (
        <ClickableDiv className="my-awesome-div" onClick={() => window.location= "/Users?userId:" + this.props.userId}>
            <div style={this.getStyle(this.props.todo)}> 
                
                <p >
                    <input type="checkbox" 
                        id='check'
                        style={checkboxStyle}
                        checked={this.props.todo.completed}
                        onChange={
                             this.props.markCopmlete.bind(this, id)
                            
                        } 
                      
                    />   {'  '}
                    
                    {
                   
                        title }
                    
                    <button style={btnStyle} onClick={this.props.removeTd.bind(this,id)}> X </button>

                   
                </p>

            </div>
      </ClickableDiv>

        )
    }
}

TodoItem.propTypes={
    todo: PropTypes.object.isRequired

  }

const btnStyle={
    color: 'rgb(255,165,0)',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer', 
    float: 'right'
}

const checkboxStyle={
    float: 'left',
    transform: `scale(2)`,
    marginTop: `.5em`,
    marginLeft: `2em`,
    clicked: `true`
}
export default TodoItem;
