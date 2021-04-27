import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { SampleBase } from './sample-base';

export class Default extends SampleBase {
    constructor() {
        super(...arguments);
        this.dateValue1 = new Date();
        this.dateValue2 = new Date();
    }
    render() {
        return (<div className='control-pane'>
                <div className='control-section'>
                    <div className='datepicker-control-section'>
                        <DatePickerComponent id="dpc001" value={this.dateValue1} openOnFocus={true}></DatePickerComponent>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <DatePickerComponent id="dpc002" value={this.dateValue2} openOnFocus={true}></DatePickerComponent>
                    </div>
                </div>
            </div>);
    }
}

render(<Default />, document.getElementById('sample'));