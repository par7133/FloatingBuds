# FloatingBuds
Everyone its conversations.

Hello and welcome to FloatingBuds!<br>
	   
FloatingBuds is a light and simple software on premise to have conversations with your buddies.<br>
	   
FloatingBuds is released under GPLv3 license, it is supplied AS-IS and we do not take any responsibility for its misusage.<br>
	   
First step, use the left side panel password and salt fields to create the hash to every of your friends in the config file. Remember to manually set there also the salt value.<br>
	   
As you are going to run FloatingBuds in the PHP process context, using a limited web server or phpfpm user, you must follow some simple directives for an optimal first setup:<br>

 <ol>
 <li>Check the permissions of your "data" folder in your web app private path; and set its path in the config file.</li>
     <li>Finish to setup the configuration file apporpriately, in the specific:</li>
     <ul>
       <li>Configure the APP_FILE_MAX_SIZE for the upload appropriately.</li>
       <li>Configure the APP_BLOG_MAX_POSTS attributes as required.</li>
       <li>Configure the PAGINATION flag as required.</li>	      
     </ul>
 </ol>
	   
Feedback: <a href="mailto:code@gaox.io">code@gaox.io</a>
