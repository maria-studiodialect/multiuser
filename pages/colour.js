import Header from '../components/header';
import socket from '../utils/sockets'
import Link from 'next/link';
import { SliderPicker } from 'react-color';
import React, { Fragment, useState, useEffect, setState } from "react";
import Title from '../components/title';

export default function Colour() {
    socket.on('connect', () => {
        socket.emit('message', 'Hello, server!');
    });



    const [color, setColor] = useState('#7AF39F')
    const [colorPickerVisible, setColorPickerVisible] = useState(false);

    useEffect(() => {
        loadColorPicker();
    }, []);

    async function loadColorPicker() {
        setColorPickerVisible(true);
    }

    function updateColor(color, e) {
        console.log(color);
        setColor(color);
        socket.emit('color', color);
    }
    
    return (
        <div>
        <Header/>
        <div className='mx-5 h-[75vh] flex flex-col justify-center max-w-3xl md:mx-auto'>
        <Title text='Select a colour'/>
        <Fragment>
            <div>{colorPickerVisible ? <SliderPicker color={color} onChangeComplete={updateColor} /> : null}</div>
        </Fragment>
        </div>
        </div>
    )
}
