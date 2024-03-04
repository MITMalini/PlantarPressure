import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Linechart1 from "./Charts/sensor1/LineChart1";
import Linechart2 from "./Charts/sensor2/LineChart2";
import Linechart3 from "./Charts/sensor3/LineChart3";
import Linechart4 from "./Charts/sensor4/LineChart4";
import Linechart5 from "./Charts/sensor5/LineChart5";
import { projectFirestore } from "../components/firebase-config";
import { ref, onValue, set, update } from "firebase/database";
function Interface7() {
  const location = useLocation();
  const event = location.state.sportId;
  const navigate = useNavigate();
  const [sensor1Data, setSensorData1] = useState([]);
  const [highestValue1, setHighest1] = useState();
  const [lowestValue1, setLowest1] = useState();
  const [mean1, setMean1] = useState();
  const [variance1, setvariance1] = useState();
  const [sensor2Data, setSensorData2] = useState([]);
  const [highestValue2, setHighest2] = useState();
  const [lowestValue2, setLowest2] = useState();
  const [mean2, setMean2] = useState();
  const [variance2, setvariance2] = useState();
  const [sensor3Data, setSensorData3] = useState([]);
  const [highestValue3, setHighest3] = useState();
  const [lowestValue3, setLowest3] = useState();
  const [mean3, setMean3] = useState();
  const [variance3, setvariance3] = useState();
  const [sensor4Data, setSensorData4] = useState([]);
  const [highestValue4, setHighest4] = useState();
  const [lowestValue4, setLowest4] = useState();
  const [mean4, setMean4] = useState();
  const [variance4, setvariance4] = useState();
  const [sensor5Data, setSensorData5] = useState([]);
  const [highestValue5, setHighest5] = useState();
  const [lowestValue5, setLowest5] = useState();
  const [mean5, setMean5] = useState();
  const [variance5, setvariance5] = useState();
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const sensorRef1 = ref(
        projectFirestore,
        `/sensor/Sport/${event}/sensor1`
      );
      onValue(
        sensorRef1,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const sensor1 = Object.entries(data).map(([key, value]) => {
              // Parse the timestamp string to a Date object
              const timestamp = new Date(value.timestamp);

              // Extract hours, minutes, and seconds
              const hours = timestamp.getHours();
              const minutes = timestamp.getMinutes();
              const seconds = timestamp.getSeconds();

              // Format the time as "HH:mm:ss"
              const formattedTime = `${hours}:${minutes}:${seconds}`;

              return {
                time: formattedTime,
                sensor1: value.value,
              };
            });
            setSensorData1(sensor1);

            // Calculate highest value
            const highestValue = sensor1.reduce(
              (max, dataPoint) =>
                dataPoint.sensor1 > max ? dataPoint.sensor1 : max,
              Number.MIN_VALUE
            );
            console.log("Highest Value:", highestValue);
            setHighest1(highestValue.toFixed(2));
            // Calculate lowest value
            const lowestValue = sensor1.reduce(
              (min, dataPoint) =>
                dataPoint.sensor1 < min ? dataPoint.sensor1 : min,
              Number.MAX_VALUE
            );
            console.log("Lowest Value:", lowestValue);
            setLowest1(lowestValue.toFixed(2));
            // Calculate average
            const total = sensor1.reduce(
              (sum, dataPoint) => sum + dataPoint.sensor1,
              0
            );
            const average = total / sensor1.length;
            console.log("Average:", average);
            setMean1(average.toFixed(2));
            // Calculate variance
            const mean = total / sensor1.length;
            const variance =
              sensor1.reduce(
                (sum, dataPoint) => sum + Math.pow(dataPoint.sensor1 - mean, 2),
                0
              ) / sensor1.length;
            console.log("Variance:", variance);
            setvariance1(variance.toFixed(1));
          } else {
            console.log("No data available");
          }
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );

      const sensorRef2 = ref(
        projectFirestore,
        `/sensor/Sport/${event}/sensor2`
      );
      onValue(
        sensorRef2,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const sensor2 = Object.entries(data).map(([key, value]) => {
              // Parse the timestamp string to a Date object

              const timestamp = new Date(value.timestamp);

              // Extract hours, minutes, and seconds
              const hours = timestamp.getHours();
              const minutes = timestamp.getMinutes();
              const seconds = timestamp.getSeconds();

              // Format the time as "HH:mm:ss"
              const formattedTime = `${hours}:${minutes}:${seconds}`;

              return {
                time: formattedTime,
                sensor2: value.value,
              };
            });
            setSensorData2(sensor2);

            // Calculate highest value
            const highestValue = sensor2.reduce(
              (max, dataPoint) =>
                dataPoint.sensor2 > max ? dataPoint.sensor2 : max,
              Number.MIN_VALUE
            );
            console.log("Highest Value:", highestValue);
            setHighest2(highestValue.toFixed(2));
            // Calculate lowest value
            const lowestValue = sensor2.reduce(
              (min, dataPoint) =>
                dataPoint.sensor2 < min ? dataPoint.sensor2 : min,
              Number.MAX_VALUE
            );
            console.log("Lowest Value:", lowestValue);
            setLowest2(lowestValue.toFixed(2));
            // Calculate average
            const total = sensor2.reduce(
              (sum, dataPoint) => sum + dataPoint.sensor2,
              0
            );
            const average = total / sensor2.length;
            console.log("Average:", average);
            setMean2(average.toFixed(2));
            // Calculate variance
            const mean = total / sensor2.length;
            const variance =
              sensor2.reduce(
                (sum, dataPoint) => sum + Math.pow(dataPoint.sensor2 - mean, 2),
                0
              ) / sensor2.length;
            console.log("Variance:", variance);
            setvariance2(variance.toFixed(1));
          } else {
            console.log("No data available");
          }
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
      const sensorRef3 = ref(
        projectFirestore,
        `/sensor/Sport/${event}/sensor3`
      );
      onValue(
        sensorRef3,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const sensor3 = Object.entries(data).map(([key, value]) => {
              // Parse the timestamp string to a Date object

              const timestamp = new Date(value.timestamp);

              // Extract hours, minutes, and seconds
              const hours = timestamp.getHours();
              const minutes = timestamp.getMinutes();
              const seconds = timestamp.getSeconds();

              // Format the time as "HH:mm:ss"
              const formattedTime = `${hours}:${minutes}:${seconds}`;

              return {
                time: formattedTime,
                sensor3: value.value,
              };
            });
            setSensorData3(sensor3);

            // Calculate highest value
            const highestValue = sensor3.reduce(
              (max, dataPoint) =>
                dataPoint.sensor3 > max ? dataPoint.sensor3 : max,
              Number.MIN_VALUE
            );
            console.log("Highest Value:", highestValue);
            setHighest3(highestValue.toFixed(2));
            // Calculate lowest value
            const lowestValue = sensor3.reduce(
              (min, dataPoint) =>
                dataPoint.sensor3 < min ? dataPoint.sensor3 : min,
              Number.MAX_VALUE
            );
            console.log("Lowest Value:", lowestValue);
            setLowest3(lowestValue.toFixed(2));
            // Calculate average
            const total = sensor3.reduce(
              (sum, dataPoint) => sum + dataPoint.sensor3,
              0
            );
            const average = total / sensor3.length;
            console.log("Average:", average);
            setMean3(average.toFixed(2));
            // Calculate variance
            const mean = total / sensor3.length;
            const variance =
              sensor3.reduce(
                (sum, dataPoint) => sum + Math.pow(dataPoint.sensor3 - mean, 2),
                0
              ) / sensor3.length;
            console.log("Variance:", variance);
            setvariance3(variance.toFixed(1));
          } else {
            console.log("No data available");
          }
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
      const sensorRef4 = ref(
        projectFirestore,
        `/sensor/Sport/${event}/sensor4`
      );
      onValue(
        sensorRef4,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const sensor4 = Object.entries(data).map(([key, value]) => {
              // Parse the timestamp string to a Date object

              const timestamp = new Date(value.timestamp);

              // Extract hours, minutes, and seconds
              const hours = timestamp.getHours();
              const minutes = timestamp.getMinutes();
              const seconds = timestamp.getSeconds();

              // Format the time as "HH:mm:ss"
              const formattedTime = `${hours}:${minutes}:${seconds}`;

              return {
                time: formattedTime,
                sensor4: value.value,
              };
            });
            setSensorData4(sensor4);

            // Calculate highest value
            const highestValue = sensor4.reduce(
              (max, dataPoint) =>
                dataPoint.sensor4 > max ? dataPoint.sensor4 : max,
              Number.MIN_VALUE
            );
            console.log("Highest Value:", highestValue);
            setHighest4(highestValue.toFixed(2));
            // Calculate lowest value
            const lowestValue = sensor4.reduce(
              (min, dataPoint) =>
                dataPoint.sensor4 < min ? dataPoint.sensor4 : min,
              Number.MAX_VALUE
            );
            console.log("Lowest Value:", lowestValue);
            setLowest4(lowestValue.toFixed(2));
            // Calculate average
            const total = sensor4.reduce(
              (sum, dataPoint) => sum + dataPoint.sensor4,
              0
            );
            const average = total / sensor4.length;
            console.log("Average:", average);
            setMean4(average.toFixed(2));
            // Calculate variance
            const mean = total / sensor4.length;
            const variance =
              sensor4.reduce(
                (sum, dataPoint) => sum + Math.pow(dataPoint.sensor4 - mean, 2),
                0
              ) / sensor4.length;
            console.log("Variance:", variance);
            setvariance4(variance.toFixed(1));
          } else {
            console.log("No data available");
          }
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
      const sensorRef5 = ref(
        projectFirestore,
        `/sensor/Sport/${event}/sensor5`
      );
      onValue(
        sensorRef5,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const sensor5 = Object.entries(data).map(([key, value]) => {
              // Parse the timestamp string to a Date object

              const timestamp = new Date(value.timestamp);

              // Extract hours, minutes, and seconds
              const hours = timestamp.getHours();
              const minutes = timestamp.getMinutes();
              const seconds = timestamp.getSeconds();

              // Format the time as "HH:mm:ss"
              const formattedTime = `${hours}:${minutes}:${seconds}`;

              return {
                time: formattedTime,
                sensor5: value.value,
              };
            });
            setSensorData5(sensor5);

            // Calculate highest value
            const highestValue = sensor5.reduce(
              (max, dataPoint) =>
                dataPoint.sensor5 > max ? dataPoint.sensor5 : max,
              Number.MIN_VALUE
            );
            console.log("Highest Value:", highestValue);
            setHighest5(highestValue.toFixed(2));
            // Calculate lowest value
            const lowestValue = sensor5.reduce(
              (min, dataPoint) =>
                dataPoint.sensor5 < min ? dataPoint.sensor5 : min,
              Number.MAX_VALUE
            );
            console.log("Lowest Value:", lowestValue);
            setLowest5(lowestValue.toFixed(2));
            // Calculate average
            const total = sensor5.reduce(
              (sum, dataPoint) => sum + dataPoint.sensor5,
              0
            );
            const average = total / sensor5.length;
            console.log("Average:", average);
            setMean5(average.toFixed(2));
            // Calculate variance
            const mean = total / sensor5.length;
            const variance =
              sensor5.reduce(
                (sum, dataPoint) => sum + Math.pow(dataPoint.sensor5 - mean, 2),
                0
              ) / sensor5.length;
            console.log("Variance:", variance);
            setvariance5(variance.toFixed(1));
          } else {
            console.log("No data available");
          }
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
    };

    fetchData();
  }, []);

  return (
    <div className="maindiv">
      <Header />

      <div className="maindiv1">
        <div className="maindiv14">
          <div className="font3">Plantar Pressure Overview</div>
          <div className="Sensordata">
            <div className="sensordataheading">
              <div className="font4">Sensor1</div>
            </div>
            <div className="SensoreDataOverview">
              <div className="sensordatachart">
                <Linechart1 sensorData={sensor1Data} />
              </div>
              <div className="sensordatachart2">
                <div className="sensordatachart3">
                  <div className="sensordatachart4">
                    <p className="font5">Highest Value </p>
                    <p className="font6">{highestValue1}</p>
                  </div>
                  <div className="sensordatachart4">
                    <p className="font5">Lowest Value </p>
                    <p className="font6">{lowestValue1}</p>
                  </div>
                </div>
                <div className="sensordatachart3">
                  <div className="sensordatachart4">
                    <p className="font5">Mean Value </p>
                    <p className="font6">{mean1}</p>
                  </div>
                  <div className="sensordatachart4">
                    <p className="font5">Variance </p>
                    <p className="font6">{variance1}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Sensordata">
            <div className="sensordataheading">
              <div className="font4">Sensor2</div>
            </div>
            <div className="SensoreDataOverview">
              <div className="sensordatachart">
                <Linechart2 sensorData={sensor2Data} />
              </div>
              <div className="sensordatachart2">
                <div className="sensordatachart3">
                  <div className="sensordatachart4">
                    <p className="font5">Highest Value </p>
                    <p className="font6">{highestValue2}</p>
                  </div>
                  <div className="sensordatachart4">
                    <p className="font5">Lowest Value </p>
                    <p className="font6">{lowestValue2}</p>
                  </div>
                </div>
                <div className="sensordatachart3">
                  <div className="sensordatachart4">
                    <p className="font5">Mean Value </p>
                    <p className="font6">{mean2}</p>
                  </div>
                  <div className="sensordatachart4">
                    <p className="font5">Variance </p>
                    <p className="font6">{variance2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Sensordata">
            <div className="sensordataheading">
              <div className="font4">Sensor3</div>
            </div>
            <div className="SensoreDataOverview">
              <div className="sensordatachart">
                <Linechart3 sensorData={sensor3Data} />
              </div>
              <div className="sensordatachart2">
                <div className="sensordatachart3">
                  <div className="sensordatachart4">
                    <p className="font5">Highest Value </p>
                    <p className="font6">{highestValue3}</p>
                  </div>
                  <div className="sensordatachart4">
                    <p className="font5">Lowest Value </p>
                    <p className="font6">{lowestValue3}</p>
                  </div>
                </div>
                <div className="sensordatachart3">
                  <div className="sensordatachart4">
                    <p className="font5">Mean Value </p>
                    <p className="font6">{mean3}</p>
                  </div>
                  <div className="sensordatachart4">
                    <p className="font5">Variance </p>
                    <p className="font6">{variance3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Sensordata">
            <div className="sensordataheading">
              <div className="font4">Sensor4</div>
            </div>
            <div className="SensoreDataOverview">
              <div className="sensordatachart">
                <Linechart4 sensorData={sensor4Data} />
              </div>
              <div className="sensordatachart2">
                <div className="sensordatachart3">
                  <div className="sensordatachart4">
                    <p className="font5">Highest Value </p>
                    <p className="font6">{highestValue4}</p>
                  </div>
                  <div className="sensordatachart4">
                    <p className="font5">Lowest Value </p>
                    <p className="font6">{lowestValue4}</p>
                  </div>
                </div>
                <div className="sensordatachart3">
                  <div className="sensordatachart4">
                    <p className="font5">Mean Value </p>
                    <p className="font6">{mean4}</p>
                  </div>
                  <div className="sensordatachart4">
                    <p className="font5">Variance </p>
                    <p className="font6">{variance4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Sensordata">
            <div className="sensordataheading">
              <div className="font4">Sensor5</div>
            </div>
            <div className="SensoreDataOverview">
              <div className="sensordatachart">
                <Linechart5 sensorData={sensor5Data} />
              </div>
              <div className="sensordatachart2">
                <div className="sensordatachart3">
                  <div className="sensordatachart4">
                    <p className="font5">Highest Value </p>
                    <p className="font6">{highestValue5}</p>
                  </div>
                  <div className="sensordatachart4">
                    <p className="font5">Lowest Value </p>
                    <p className="font6">{lowestValue5}</p>
                  </div>
                </div>
                <div className="sensordatachart3">
                  <div className="sensordatachart4">
                    <p className="font5">Mean Value </p>
                    <p className="font6">{mean5}</p>
                  </div>
                  <div className="sensordatachart4">
                    <p className="font5">Variance </p>
                    <p className="font6">{variance5}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interface7;
