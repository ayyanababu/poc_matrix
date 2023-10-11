import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import sdk from "matrix-js-sdk";
import axios from "axios";

// const client = new MatrixClient({
//   homeserverUrl: "https://matrix.org",
// });

function App() {
  const startMatrix = async () => {
    // const headers = {
    //   "Content-Type": "application/json",
    //   Authorization:
    //     "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxNzM5MzEyIiwidXNlclJlYWxtUm9sZSI6Ik9XTkVSIiwiZ3JhbnRUb2tlbiI6ImV5SmhiR2NpT2lKU1V6STFOaUo5LmV5SnpkV0lpT2lKN1hHNGdJRndpY21WaGJHMUpaRndpSURvZ2JuVnNiQ3hjYmlBZ1hDSjFjMlZ5VG1GdFpWd2lJRG9nWENJeE56TTVNekV5WENJc1hHNGdJRndpY205c1pYTmNJaUE2SUc1MWJHd3NYRzRnSUZ3aWNtVmhiRzFWYm1seGRXVkpaR1Z1ZEdsbWFXVnlYQ0lnT2lCdWRXeHNMRnh1SUNCY0luVnpaWEpKWkZ3aUlEb2dNVGN6T1RNeE1peGNiaUFnWENKemVYTjBaVzFWYzJWeVNXUmNJaUE2SUc1MWJHd3NYRzRnSUZ3aVkzVnljbVZ1ZEZKbFlXeHRYQ0lnT2lCdWRXeHNMRnh1SUNCY0ltRnNiRkpsWVd4dGMxd2lJRG9nYm5Wc2JGeHVmU0lzSW1GMVpDSTZJazVwYm1waFkyRnlkRVZ0Y0d4dmVXVmxJaXdpYVhOeklqb2lUbWx1YW1GallYSjBJaXdpYVdGMElqb3hOamsyTkRBMk56WTVMQ0psZUhBaU9qRTNNVEU1TlRnM05qbDkuQzJXMEVVaDNpMWlfdWdXRklwc0dLMVVIRHY3dWY1eUxqbjVEdDBsaHJ5c2hlYmhpTHZCc05uZUFSTUZUamtVa01zLW4xalJLcnk0TnB3TTBXcldoc1diUXMwS1JQSEZyX09vV2p1TGtLMTNNcXo1WGpySl9pWDFNZVUzSzZ4T2dyRGs3Y1ZQanRZNDJrMWtsYWd1cFpPeU55cnl4MnBHeTJiWDZEMTlLNHg3WEc1VWRJbEs3X0NtWlhBbDJGNWtRNm13a3c0QmsySHU1dnp1ZVViZVA3MlJmX0JWUTJCZUlYNmZOODdwOUpIcjhWUS0yaWdCeUJ0dE9qZUJOeTRpc1hGWWhIUkFGVFNQWC1nVW91ZmE0QWdnWDFDQlRlZzEzc1NaeHlPTllWenlhc3U3LWhPa1lFVjl0UGRYbnRsWHhhLUVQS0NEanI4dFNuRmM5TndCTDlnIiwicm9sZXMiOltdLCJzY29wZSI6W10sImlzcyI6Ik5pbmphY2FydCIsImV4cCI6MTY5NjQxNjc3MCwiaWF0IjoxNjk2NDA2NzcwLCJ1c2VySWQiOiIxNzM5MzEyIn0.NtLxfBbBw_haNAcMWtC_boGak5GkSxj2fb2hfXtYOsafGBDqW-0xiv0T0RVwDs6wyFK9moNZ4M_UFi1NrP4MpnSo7Vx1tsE_kXBCkPJdDDF_e3U4Hz_OvCD_QiBMsB1tHjHr7-xgQZzckgLdRixw3QTNis8dtOtX0l_TC7_GKfAxDdUU2-7kJgoh3Eow3Ssv_C9c93tplbop-SRAY4rPNPdjfDBkq_LWtkxdYd3AtF1ZrRsXqZvsSbvypD2UtUikQzkxLRUyOF5jBGa6O6L5jo1wff6NaRg0Bk8zhvlVVPcB1FDCRjzDQ6rszNtT0vQKhYwSPJbeLXiO28AAgMCQniYlljp-BbLwe2P6JbMC26xv_4xYqDbHsxpZPbj0n5tGXVyQEHRJz6GO6DQCNACc2ywdoVgYzTjpNjIsYeAb4pFSFNGPRz3h2w7QisSFSDCAd3Y_UUvE7BIz_OKiBi2x4rHWU6HwfJ7GETzOjd1bVhm0zWmckVql_GqEoEqOWH93kzfreFjhI1GFSyzlGW-U8itlVb8-t-Uj7oGisaHIODSY9dz3SWNMsgd1sWp1feLlUsoIdjGUeKNzehjnV4KCQdTPR9l_DrcMVkyAPaSdyeSfF3hvixnadJqxRHeNafqkHPTzJ_0RpbMhOCR8KJ1FNn4YNueVD_aqglAYtzCksHQ",
    // };

    // try {
    //   const url =
    //     "https://api.trafyn.info/workflow-engine/d974022e-3132-406b-813a-28483ccfa25a/1739313/v1/execution/service/run/tenant-nfc-get-matrix-credentials";
    //   const apiRes = await axios.post(
    //     url,
    //     { input: { nfc_user_id: 885 } },
    //     { headers: headers }
    //   );
    //   console.log("*** success ", apiRes.data);
    // } catch (e) {
    //   console.log("error while start clent", e);
    // }

    const matrixClient = sdk.createClient({
      baseUrl: "https://qa-matrix.ninjacart.in/",
    });

    try {
      let result = await matrixClient.loginWithPassword(
        "@25c3ed73-cd4b-4dac-8a7c-473a6e359f38_2036813:95.216.170.148",
        "8ed53ba9-4e58-4630-893a-54aa8ad23b24"
      );
      console.log("$$$Logged in successfully.", result);
      // You are now logged in and can perform other Matrix operations.
    } catch (err) {
      console.error("$$$Login failed:", err);
    }

    const matrixClient = new sdk.createClient({
      // baseUrl: 'https://qa-matrix.ninjacart.in/',
      // accessToken: 'syt_b25kY18xNzM5MzEz_QDRwEqCPUkknhAcWkPJf_0Ejgt3',
      // deviceId: '25c3ed73-cd4b-4dac-8a7c-473a6e359f38_2036813', // Optional: Specify a custom device ID
      // timelineSupport: true,
      // verificationMethods: ['m.sas.v1'],
      // userId: '@25c3ed73-cd4b-4dac-8a7c-473a6e359f38_2036813:95.216.170.148',
      baseUrl: "https://qa-matrix.ninjacart.in/",
      // accessToken: "syt_b25kY18xNzM5MzEz_QDRwEqCPUkknhAcWkPJf_0Ejgt3", // old
      accessToken:
        "syt_MjVjM2VkNzMtY2Q0Yi00ZGFjLThhN2MtNDczYTZlMzU5ZjM4XzIwMzY4MTM_eXzxIVKxackDYfShvkny_2OftMn",
      // userId: "@ondc_1739313:95.216.170.148",
      userId: "@25c3ed73-cd4b-4dac-8a7c-473a6e359f38_2036813:95.216.170.148",
      // store: new sdk.MemoryStore({localStorage: window.localStorage}),
      // store: indexedDBStore,
      deviceId: "UWBCWSMCRP",
      timelineSupport: true,
      verificationMethods: ["m.sas.v1"],
    });

    // await matrixClient.startClient({ lazyLoadMembers: true });

    // const sync = {
    //   NULL: () => {
    //     console.log("#####NULL state");
    //   },
    //   SYNCING: () => {
    //     console.log("#####SYNCING state");
    //   },
    //   PREPARED: (prevState: any) => {
    //     console.log("#####PREPARED state");
    //     console.log("#####Previous state: ", prevState);
    //     // TODO: remove global.initMatrix at end
    //     // if (prevState === null) {
    //     //   this.roomList = this.matrixClient.getRooms();
    //     //   this.emit('init_loading_finished');
    //     //   this.setFcmtokenInPusher();
    //     // }
    //   },
    //   RECONNECTING: () => {
    //     console.log("#####RECONNECTING state");
    //   },
    //   CATCHUP: () => {
    //     console.log("#####CATCHUP state");
    //   },
    //   ERROR: (e) => {
    //     console.log("#####ERROR state", e);
    //     // this.emit('init_error');
    //   },
    //   STOPPED: () => {
    //     console.log("#####STOPPED state");
    //     // this.emit('init_stopped');
    //   },
    // };
    // matrixClient.on(sdk.ClientEvent.Sync, (state, prevState) =>
    //   sync[state](prevState)
    // );

    // matrixClient.sendTextMessage(
    //   "!qfkCsvUjbHBlyBVrHZ:95.216.170.148",
    //   "from raja - hi - 1- poc"
    // );
  };

  useEffect(() => {
    startMatrix();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
