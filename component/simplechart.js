import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import React, { Component } from 'react';

class RevenueReport extends Component
{
    constructor(props)
    {
        super(props);
    }
    render () 
    {
  	return (
          <div class="row">
                <div class="col-sm-8">
                    <LineChart width={700} height={400} data={this.props.data}
                        margin={{top: 10, right: 0, left:0, bottom: 5}}>
                        <XAxis dataKey="rev"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey="month" stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey="running" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="name" stroke="#82ca9d" />
                    </LineChart>
                    
                </div>
            </div>
    );
  }

}


export default RevenueReport;