import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

const ChessBoard = () => {
    const svgRefBox = useRef();
    
    const boardDimension = 300;
    const boxDimension = 100;

    const numRows = 3;
    const numCols = 3;

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(()=>{
        const svgBox = d3.select(svgRefBox.current)
        
        svgBox.select("rect")
            .attr("transform", `translate(${x},${y})`)
    },[x,y])

    //svg attribute
    useEffect(()=>{
        const svgBox = d3.select(svgRefBox.current)

        //svg moving box
        svgBox.select('rect')
            .attr('fill', "#63BBF2")


        //border
        svgBox
            .append("rect")
            .attr('x',0)
            .attr('y',0)
            .attr("width", boardDimension)
            .attr("height", boardDimension)
            .attr("fill", "none")
            .attr("stroke", "#526FAD")
            .attr("stroke-width", 4)

        
        //draw vertical lines
        for (let i =1; i<=numRows; i++) {
            svgBox
            .append("line")
            .attr("x1",0)
            .attr("y1", i*boxDimension)
            .attr("x2",boardDimension)
            .attr("y2", i*boxDimension)
            .attr("stroke", "#526FAD")
            .attr("stroke-width", 3)
        }

        for (let j =0; j<numCols; j++) {
            svgBox
            .append("line")
            .attr("x1",j*boxDimension)
            .attr("y1", 0)
            .attr("x2", j*boxDimension)
            .attr("y2", boardDimension)
            .attr("stroke", "#526FAD")
            .attr("stroke-width", 3)
        }
    },[])

  return (
    <div style={{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'}}
    >   
        
        <div style={{width: "100%", display: 'flex', justifyContent: 'center'}}>
            <h3>ChessBoard wiht moving Cube</h3>
        </div>

        {/* svg and y axis slider */}
        <div 
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                {/* y axis */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: `${boxDimension}px`,
                    height: `${boardDimension}px`,
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0'
                }}
            >
                <label
                    htmlFor="y-axis"
                    style={{
                        fontWeight: "600",
                        fontSize: '20px',
                        color: "#526FAD",
                        marginTop: `-${boxDimension}px`,
                        padding: '0'
                    }}
                >
                    Y Axis:
                </label>
                <input
                    type="range"
                    id='y-axis'
                    min={0}
                    max={boardDimension-boxDimension}
                    value={y}
                    onChange={(e) => setY(e.target.value)}
                    style={{
                        transform: "rotate(-270deg)",
                        width: "200px",
                        marginTop: `${boxDimension}px`
                    }}
                />
            </div>
        
        {/* SVG Board */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                width: `${boardDimension}px`,
                height: `${boardDimension}px`,
                backgroundColor: 'white'
            }}>
                <svg
                    ref={svgRefBox}
                    width={boardDimension}
                    height={boardDimension}
                >
                    <rect x={0} y={0} width={boxDimension} height={boxDimension} />
                </svg>
            </div>
        </div>
        
        {/* x slider */}
        <div
            style={{
                display: 'flex',
                justifyContent: "center",
                flexDirection: 'column',
                alignItems: 'center',
                width: boardDimension,
                height: boxDimension,
                marginLeft: boxDimension
            }}
        >   
            <input 
                type="range"
                id='x-axis'
                min={0}
                max={boardDimension - boxDimension}
                value={x}
                onChange={(e) => setX(e.target.value)}
                style={{
                    width: "200px"
                }} 
            />

            <label 
                htmlFor="x-axis"
                style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#526FAD",
                    margin: "0",
                    padding: '0',
                }}>
                X Axis
            </label>
        </div>
        
        <div
            style={{
                // color: 'red',
            }}>
        {`transform = translate (${x}, ${y})`}
        </div>
    </div>
  )
}

export default ChessBoard
