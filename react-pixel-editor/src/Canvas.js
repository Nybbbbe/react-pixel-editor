
import React, { useRef, useEffect } from 'react';
import './Canvas.css';

const Canvas = (props) => {
    console.log(props);
  
    const canvasRef = useRef(null);
    const pixelSize = 32;
  
    const draw = (ctx, canvas, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#000000';
        const midPoint = {
            x: canvas.width/2,
            y: canvas.height/2,
        };
        const gridStartPoint = {
            x: midPoint.x - ((pixelSize * props.width)/2),
            y: midPoint.y - ((pixelSize * props.height)/2)
        };

        console.log(gridStartPoint);

        for (let i = 0; i <= props.width; i++) {
            ctx.moveTo(gridStartPoint.x + i * pixelSize, gridStartPoint.y);
            ctx.lineTo(gridStartPoint.x + i * pixelSize, gridStartPoint.y + props.height * pixelSize);
            ctx.stroke();
        }

        for (let i = 0; i <= props.height; i++) {
            ctx.moveTo(gridStartPoint.x, gridStartPoint.y + i * pixelSize);
            ctx.lineTo(gridStartPoint.x + props.width * pixelSize, gridStartPoint.y + i * pixelSize);
            ctx.stroke();
        }
        // ctx.beginPath();
        // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI);
        // ctx.fill();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight - 72;
        let frameCount = 0;
        let animationFrameId;

        window.onresize = () => {
            canvas.width = document.body.clientWidth;
            canvas.height = document.body.clientHeight - 72;
        };
    
        //Our draw came here
        const render = () => {
            frameCount++;
            draw(context, canvas, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        };

        render();
        
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    });
  
  return <canvas ref={canvasRef}/>
};

export default Canvas;