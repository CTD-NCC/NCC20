import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: this.props.chartData
        }
    }

    render(){
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    height={425}
                    options={{
                        showScale: true,
                        maintainAspectRatio: false,
                        title: {
                            position: 'bottom',
                            display: true,
                            text: 'Number of Teams v/s Scoring Range',
                            fontSize: 24,
                            fontColor: 'white'
                        },
                        legend: {
                            position: 'top',
                            labels: {
                                fontColor: 'white',
                                fontSize: 18
                            },
                            onClick: (e) => e.stopPropagation()
                        },
                        layout: {
                            padding: {
                                left: 0,
                                right: 0,
                                bottom: 0,
                                top: 15
                            }
                        },
                        tooltips: {
                            enabled: true
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    min: 0,
                                    max: 24,
                                    stepSize: 3,
                                    fontColor: "white",
                                    fontSize: "15"
                                },
                                gridLines: {
                                    zeroLineColor: "white",
                                    color: "#777"
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: "white",
                                    fontSize: "15"
                                },
                                gridLines: {
                                    color: "#777",
                                    zeroLineColor: "#777"
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;