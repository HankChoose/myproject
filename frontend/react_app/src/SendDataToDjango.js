import React, { Component } from 'react';
import axios from 'axios';

class MyComponent extends Component {
  async SendDataToDjango() {
    try {
      const dataToSend = {
        key1: 'value1',
        key2: 'value2',
        // 添加要发送给Django的数据
      };

      const response = await axios.post('/send-data/', dataToSend);
      console.log('Response from Django:', response.data);
    } catch (error) {
      console.error('Error sending data to Django:', error);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.SendDataToDjango}>Send Data to Django</button>
      </div>
    );
  }
}

export default MyComponent;
