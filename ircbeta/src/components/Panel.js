import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Animated
} from 'react-native'; //Step 1

class Panel extends Component{
    constructor(props){
        super(props)

        this.icons = {     //Step 2
            'up'    : require('../../assets/Arrowhead-01-128-1.png'),
            'down'  : require('../../assets/Arrowhead-Down-01-128-1.png')
        };

        this.state = {       //Step 3
            title       : props.title,
            expanded    : true,
            animation   : new Animated.Value()
        };

    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    toggle(){
         //Step 1
    let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
    finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

    this.setState({
        expanded : !this.state.expanded  //Step 2
    });

    this.state.animation.setValue(initialValue);  //Step 3
    Animated.spring(     //Step 4
    this.state.animation,
        {
            toValue: finalValue
        }
        ).start();  //Step 5
    }


    render(){
        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];   //Step 4
        }

        //Step 5
        return (
<Animated.View
            style={[styles.container,{height: this.state.animation, backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '#fdc513' }]}>
            <View style={[styles.container, {
              backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '#fdc513' }]}

              >
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>

                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)} >
                    <Text>{this.props.description}</Text>
                </View>

            </View>
            </Animated.View>
        );
    }
}

var styles = StyleSheet.create({
    container   : {
        backgroundColor: '#fdc513',
        margin: 10,
        borderRadius: 20,
        overflow:'hidden'
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'#2a2f43',
        fontWeight:'bold'
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    }
});

export default Panel;
