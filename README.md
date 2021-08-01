# [\_V_WB\_]\.\_**V**_.WorkBalancer
Way to off-load work to separate thread (multiple if available) and keep the work in in loop so most of things get moved to WW for calculations.

## How to use?
Well mostly these are separate projects so each one should contain it's own descriptions and instructions on how to handle things. Cuz this started through few projects that can evenutally get repacked and organized in a manner to achieve more than just a bad game able to run 144hz custom 2D drawing in off-screen canvas...soo Refactoring whith optimizations for the purpose of having better web experience on any website that utilizes this. 

> **NOTE:**   
> Because this utilizes web/browser tech it should theoretically bring power of multi-threaded execution of code to any device being able to handle it. 

## Additional Data: 
- Google Advertising their new tech meant to deliver similar thing.  
**Subject:** The main thread is overworked & underpaid (Chrome Dev Summit 2019)  
**URL:** [https://www.youtube.com/watch?v=7Rrv9qFMWNM](https://www.youtube.com/watch?v=7Rrv9qFMWNM)  
**Author:** [Google Chrome Developers](https://www.youtube.com/c/GoogleChromeDevelopers/about) [YouTube Channel]
  - **Device mentioned:** [ [ Nokia 2 ] ](https://www.gsmarena.com/nokia_2-8513.php)
  - **Quote from video:** 
    - *"...this [similar performance] is what 16% of people will use as a low end device running the web and expecting a decent experience....making it work on this will get you 96% of devices to work..."* -> **[not those exact words]**
  - **Conclusion:** 
    - Only 4% of devices are gonna "maybe" stutter...getting more users happy and resulting in better overall User Experience.
  - **Re-Search:** 
    - Nokia 2 has 4 CPU cores clocked at 1.3Ghz which may actually even perform stuff when utilized correctly. 1GB of ram is super low so things need to be small...and trottled down so system doesn't generate many variables. Then the 5 inch screen is not that small when I remember I used HTC with similar performance and 4.5" screen without a problem.
# 
##
# Folder Structure 

**╔ Application_Samples** ═══════════════════════╗  
**Description:** This is where you can find some demos and tech  
previews (some failing probably  hahaha still non in there but  
 failing they are expected to do).  

| Folder | Sample Name | Complexity
| ------ | ------ | ----- | 
| WebWorker_TD_01 | Most Basic Web Worker Example | 2 - low |  
| WebWorker_TD_02 | Sending Commands For Execution | 3 - medium | 
| WebWorker_TD_03 | Looping a task list to multiple ww. | 4 - high |  
| WebWorker_TD_04 | Using WW to make WW to loop. | 5 - top |   
| WebWorker_TD_04 | WW with o | X - top+ | 
  
#### <-> -> WebWorker-INIT_DEMO_1