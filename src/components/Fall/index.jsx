import React, { useEffect } from "react";
import * as tf from '@tensorflow/tfjs';
import { ToastContainer, toast } from 'react-toastify';
import { Text } from "components";

import "./fall.css"

import 'react-toastify/dist/ReactToastify.css';

const Fall = () => {
  const [sensorActive, setSensorActive] = React.useState(false);

  useEffect(async () => {
    await test_inference(Array(120).fill(0));
    await init_sensor();
  }, []);

  useEffect(async () => {
    if (sensorActive) {
      await test_inference(Array(120).fill(0));
      await init_sensor();
    }
  }, [sensorActive]);


  async function test_inference(inputArray) {
    try {
      const model = await tf.loadLayersModel("model.json");

      const inputTensor = tf.tensor2d(inputArray, [1, 120]);
      const output = model.predict(inputTensor);
      const predictions = Array.from(output.dataSync());
      // Dispose of the tensors to free memory
      inputTensor.dispose();
      output.dispose();

      // console.log(predictions);
      if (sensorActive) {
        document.getElementById("test").innerHTML = "Measuring: " + Number.parseFloat(predictions).toFixed(7);
      }
      if (predictions >= 0.5) {
        document.body.style.backgroundColor = "red";
        toast.error("Fall Detected");
        toast.clearWaitingQueue();
      }
      else {
        document.body.style.backgroundColor = `rgb(42, 74, 103)`;;
      }
      // return predictions;
    } catch (err) {
      toast.error("Error: " + err);
      return;
    }
  }

  async function init_sensor() {
    try {
      if ('LinearAccelerationSensor' in window == false) {
        toast.error('No LinearAccelerationSensor found');
        return;
      }
      setSensorActive(true);
      const fs = 60;
      const rec_len = 2 * fs;
      const data = new Array(rec_len).fill(0.0);
      let count = 0;

      const acl = new LinearAccelerationSensor({ frequency: fs });
      acl.addEventListener("reading", async () => {
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
      return;
    }
  }

  return (
    <div>
     {sensorActive && (
        <div>
          <Text
            className="mx-auto text-2xl p-2 border-4 border-white rounded bg-green text-green-500 font-bold animated-sensor"
            as="h4"
            variant="h4"
          >
            Sensor Is Active
          </Text>

          <div id="test" className="mt-10 text-lg">
            Value: 123
          </div>
        </div>
      )}

      {!sensorActive && (
        <Text
          className="mx-auto text-2xl p-2 border-4 border-white rounded bg-red-500 text-red-500 font-bold animated-sensor"
          as="h4"
          variant="h4"
        >
          Sensor Is Not Active
        </Text>
      )}
        <ToastContainer />
    </div>
  );
};

export { Fall };
