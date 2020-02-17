import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    render(){
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    height={388}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            position: 'bottom',
                            display: true,
                            text: 'Time v/s Submissions Graph',
                            fontSize: 25,
                            fontColor: '#444'
                        },
                        legend: {
                            position: 'top',
                            labels: {
                                fontColor: 'black',
                                fontSize: 18
                            }
                        },
                        layout: {
                            padding: {
                                left: 0,
                                right: 0,
                                bottom: 0,
                                top: 10
                            }
                        },
                        tooltips: {
                            enabled: true
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;