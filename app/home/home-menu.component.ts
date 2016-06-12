import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home-menu',
  template: `    
    <div class="menu">
        <div id="aboutMenu" class="menuItem" title="Author"><img src="images/developer.png" width="80px" height="80px"></div>
        <div class="menuSeparator"></div>
        <div id="sourceMenu" class="menuItem" title="Project Website / Download Latest Version"><img src="images/github.png" width="20px" height="20px"></div>
        <div class="menuSeparator"></div>
        <div id="reportBugMenu" class="menuItem" title="Report a Bug"><img src="images/bug.png" width="20px" height="20px"></div>
        <div class="menuSeparator"></div>
        <div id="licenseMenu" class="menuItem" title="Read License"><img src="images/license.png" width="20px" height="20px"></div>
        <div class="menuSeparator"></div>
        <div id="likeMenu" class="menuItem" title="Like on Facebook"><img src="images/fblike.png" width="50px" height="20px"></div>
        <div class="menuSeparator"></div>
        <div id="fbShareMenu" class="menuItem" title="Share on Facebook"><img src="images/facebook.png" width="20px" height="20px"></div>
        <div class="menuSeparator"></div>
        <div id="twitterShareMenu" class="menuItem" title="Share on Twitter"><img src="images/twitter.png" width="20px" height="20px"></div>
        <div class="menuSeparator"></div>
        <div id="gplusShareMenu" class="menuItem" title="Share on Google Plus"><img src="images/gplus.png" width="20px" height="20px"></div>
        <div class="menuSeparator"></div>
        <div id="linkedShareMenu" class="menuItem" title="Share on LinkedIn"><img src="images/linkedin.png" width="20px" height="20px"></div>
    </div>
  `  
})
export class HomeMenuComponent { }