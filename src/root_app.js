const { update } = require("lodash");

console.log("YEAAAA");

const vAppUI = {
  dev: true,
  activeStatus: false,
  autoStart: true,
  element: null,
  config: {
    mode: "raf",   // "sec"  <>  "raf"   [ secondInterval()  or requestAnimationFrame() ]
    updateNumber: 15000,
  },
  doneTasks: 0,
  interval: null,
  targetFPS: 60,
  currentFPS: 0,
  fpsOneSec: 0,
  findingOptimalStatus: true,
  findingOptimalStatusAttempts: 500,

  setTargetFPS: (num = 60) => {
    vAppUI.targetFPS = num;
    return num;
  },

  startFindOptimal: (numberOfAttempts = 10) => {
    vAppUI.findingOptimalStatusAttempts = numberOfAttempts;
    vAppUI.findingOptimalStatus = true;
  },
  findOptimal: () => {
    if (vAppUI.findingOptimalStatusAttempts > 0) {
      vAppUI.config.updateNumber = vAppUI.config.updateNumber * vAppUI.currentFPS / vAppUI.targetFPS;
      document.getElementById('uiWorkLimiterValue').value = vAppUI.config.updateNumber;
      vAppUI.findingOptimalStatusAttempts--;
    } else {
      vAppUI.findingOptimalStatus = false;
    }
  },

  setUpdatesNumber: (num = 1) => {
    vAppUI.config.updateNumber = num;
    return num;
  },

  startUpdates: () => {
    console.time("vAppUI_startUpdates ->")
    if (vAppUI.activeStatus) vAppUI.stopUpdates();
    vAppUI.activeStatus = true;
    if (vAppUI.config.mode === "raf") {
      vAppUI.rafUpdateUI();
    } else if (vAppUI.config.mode === "sec") {
      console.log("work_in_progress")
    } else {
      console.log("unknown mode")
    }
    console.timeEnd("vAppUI_startUpdates ->")
    return this.activeStatus;
  },

  stopUpdates: () => {
    console.time("vAppUI_stopUpdates ->")
    vAppUI.activeStatus = false;
    console.timeEnd("vAppUI_stopUpdates ->")
    return vAppUI.activeStatus;
  },

  isActive: () => {
    return vAppUI.activeStatus;
  },

  rafUpdateUI: (timestamp) => {
    console.time("vAppUI_rafUpdateUI ->")
    if (vAppUI.start === undefined) vAppUI.start = timestamp;
    if (vAppUI.oneSecInterval === undefined) vAppUI.oneSecInterval = timestamp;
    const elapsed = timestamp - vAppUI.start;

    if (vAppUI.previousTimeStamp !== timestamp) {
      for (var i = 1; i <= vAppUI.config.updateNumber; i++) {
        uiTaskToDo(elapsed, timestamp);
      }
    };

    if ((timestamp - vAppUI.oneSecInterval) > 1000) {
      vAppUI.currentFPS = vAppUI.fpsOneSec;
      vAppUI.fpsOneSec = 0;
      console.log("FPS : " + vAppUI.currentFPS + " ; TasksPerFrame : " + vAppUI.config.updateNumber);
      vAppUI.oneSecInterval = timestamp;
      document.querySelector("value[name='currentFPS']").innerHTML = vAppUI.currentFPS;

      if (vAppUI.findingOptimalStatus === true) {
        vAppUI.findOptimal();
      }
    }
    vAppUI.fpsOneSec++;

    if (vAppUI.isActive()) { // Stop the animation after 2 seconds
      vAppUI.previousTimeStamp = timestamp;
      console.timeEnd("vAppUI_rafUpdateUI ->")
      window.requestAnimationFrame(vAppUI.rafUpdateUI);
    }
  },
  setConfig: (cfg = null) => {
    console.time("vAppUI__setConfig ->")
    if (cfg !== null) {
      if (typeof cfg.mode !== "undefined") {
        console.log(`SETTING mode  => ${cfg.mode}`);
        vAppUI.config.mode = cfg.mode;
      }

      if (typeof updateNumber !== "undefined") {
        console.log(`SETTING updateNumber  => ${cfg.updateNumber}`);
        vAppUI.setUpdatesNumber(cfg.updateNumber);
      }

      console.log("cfg  =>  OK");

      console.timeEnd("vAppUI__setConfig ->")
      return true;
    } else {
      console.log("cfg  =>  NULL");
      console.timeEnd("vAppUI__setConfig ->")
      return false;
    }
  },

  init: (config = null) => {

    if (window.vAppUI === undefined) window.vAppUI = vAppUI;

    console.time("vAppUI__init ->")
    vAppUI.setConfig(config);

    if (vAppUI.autoStart === true) {
      vAppUI.startUpdates();
    }

    console.timeEnd("vAppUI__init ->")
  }
}

console.time("vAppUI")
//-> PRINT IT TO CONSOLE ___>
console.log(vAppUI);

// INITIATE vAppUI - - - ->->
vAppUI.init()

console.timeEnd("vAppUI")



function uiTaskToDo(elapsed, timestamp) {
  //console.time("uiTaskToDo function call");
  // Math.min() is used here to make sure the element stops at exactly 200px
  var count = 0.1 * elapsed;
  if (count > window.screen.width) vAppUI.start = timestamp;

  document.querySelectorAll("v_ui_sample_elem").forEach(item => {
    item.style.transform = 'translateX(' + count + 'px)';
  });
  //console.timeEnd("uiTaskToDo function call");
}


