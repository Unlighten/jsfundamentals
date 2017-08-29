//Same Origin Policy
//The same-origin policy restricts how a document or script loaded from one origin can interact with a resource from another origin.
//It is a critical security mechanism for isolating potentially malicious documents.

//http://store.company.com/dir2/other.html			Success	 
//http://store.company.com/dir/inner/another.html	Success	 
//https://store.company.com/secure.html				Failure	Different protocol
//http://store.company.com:81/dir/etc.html			Failure	Different port
//http://news.company.com/dir/other.html			Failure	Different host

//This is the reason why some of the things that you try to link will not work

// if you have a file foo.html which accesses another file bar.html and you have navigated to it from the file index.html, 
//the load will succeed only if bar.html is either in the same directory as index.html or in a directory contained within the same directory as index.html.

//The new security.fileuri.strict_origin_policy preference, which defaults to true, can be set to false
//if the user doesn't want to strictly enforce the same origin policy on file: URIs.

//In order to change the origin, you can use:
document.domain = "company.com";

//The same origin policy works as a security service.
//If I did not have the same origin policy and I was logged into twitter and then I went to a malicious website,
//a lot of interesting things could happen to my twitter account.

//It is also important to look out for cross site scripting, which is vulnerability that allows an attacker to inject JavaScript code into a website,
//so that it originates from the attacked website from the browser point of view.

//The browser has no way to detect that this code was not provided by the website owner, 
//so it will execute it. Nowadays cross site scripting is a major issue, so there is work done to prevent this vulnerability.
//Look out for alerts!

<script>alert(document.cookie)</script>
