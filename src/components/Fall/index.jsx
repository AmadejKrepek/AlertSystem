import React, { useEffect } from "react";
import * as tf from '@tensorflow/tfjs';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Fall = () => {

  useEffect(async () => {
    await test_inference(Array(120).fill(0));
    await init_sensor();
  }, []);

  async function test_inference(inputArray) {
    try {
      toast.info("Loading model...");
      const model = await tf.loadLayersModel("model.json");

      const inputTensor = tf.tensor2d(inputArray, [1, 120]);
      const output = model.predict(inputTensor);
      const predictions = Array.from(output.dataSync());
      // Dispose of the tensors to free memory
      inputTensor.dispose();
      output.dispose();

      // console.log(predictions);
      document.getElementById("test").innerHTML = predictions;
      if (predictions >= 0.5) document.body.style.backgroundColor = "red";
      else document.body.style.backgroundColor = "white";
      // return predictions;
    } catch (err) {
      toast.error("Error: " + err);
    }
  }

  async function init_sensor() {
    try {
      if ('LinearAccelerationSensor' in window == false) {
        toast.error('No LinearAccelerationSensor found');
        return;
      }
      toast.info("Initializing sensor...");
      const fs = 60;
      const rec_len = 2 * fs;
      const data = new Array(rec_len).fill(0.0);
      let count = 0;

      const acl = new LinearAccelerationSensor({ frequency: fs });
      acl.addEventListener("reading", async () => {
        console.log(`Acceleration along the X-axis ${acl.x}`);
        console.log(`Acceleration along the Y-axis ${acl.y}`);
        console.log(`Acceleration along the Z-axis ${acl.z}`);
        var val = Math.sqrt(acl.x * acl.x + acl.y * acl.y + acl.z * acl.z);

        data.push(val);
        data.shift(); // pop front

        count++;
        if (count >= 60) {
          await test_inference(data);
          // document.getElementById("test").innerHTML = val;
          count = 0;
        }
        // document.getElementById("test").innerHTML = "(" + num_fall + "): " + val; // Number(acl.x).toFixed(2) + "  " + Number(acl.y).toFixed(2) + "  " + Number(acl.z).toFixed(2);
      });
      acl.start();
    }
    catch (err) {
      toast.error("Error: " + err);
    }
  }

  return (
    <div>
        <div id="test">Waiting for app activation</div>
        <ToastContainer />
    </div>
  );
};

export { Fall };
