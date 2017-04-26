Ext.data.JsonP.Autolinker_matcher_UrlMatchValidator({"tagname":"class","name":"Autolinker.matcher.UrlMatchValidator","autodetected":{"members":true},"files":[{"filename":"UrlMatchValidator.js","href":"UrlMatchValidator.html#Autolinker-matcher-UrlMatchValidator"}],"private":true,"singleton":true,"members":[{"name":"hasFullProtocolRegex","tagname":"property","owner":"Autolinker.matcher.UrlMatchValidator","id":"property-hasFullProtocolRegex","meta":{"private":true}},{"name":"hasWordCharAfterProtocolRegex","tagname":"property","owner":"Autolinker.matcher.UrlMatchValidator","id":"property-hasWordCharAfterProtocolRegex","meta":{"private":true}},{"name":"ipRegex","tagname":"property","owner":"Autolinker.matcher.UrlMatchValidator","id":"property-ipRegex","meta":{"private":true}},{"name":"uriSchemeRegex","tagname":"property","owner":"Autolinker.matcher.UrlMatchValidator","id":"property-uriSchemeRegex","meta":{"private":true}},{"name":"containsMultipleDots","tagname":"method","owner":"Autolinker.matcher.UrlMatchValidator","id":"method-containsMultipleDots","meta":{"private":true}},{"name":"isValid","tagname":"method","owner":"Autolinker.matcher.UrlMatchValidator","id":"method-isValid","meta":{}},{"name":"isValidIpAddress","tagname":"method","owner":"Autolinker.matcher.UrlMatchValidator","id":"method-isValidIpAddress","meta":{"private":true}},{"name":"isValidUriScheme","tagname":"method","owner":"Autolinker.matcher.UrlMatchValidator","id":"method-isValidUriScheme","meta":{"private":true}},{"name":"urlMatchDoesNotHaveAtLeastOneWordChar","tagname":"method","owner":"Autolinker.matcher.UrlMatchValidator","id":"method-urlMatchDoesNotHaveAtLeastOneWordChar","meta":{"private":true}},{"name":"urlMatchDoesNotHaveProtocolOrDot","tagname":"method","owner":"Autolinker.matcher.UrlMatchValidator","id":"method-urlMatchDoesNotHaveProtocolOrDot","meta":{"private":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.matcher.UrlMatchValidator","short_doc":"Used by Autolinker to filter out false URL positives from the\nUrlMatcher. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/UrlMatchValidator.html#Autolinker-matcher-UrlMatchValidator' target='_blank'>UrlMatchValidator.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Used by Autolinker to filter out false URL positives from the\n<a href=\"#!/api/Autolinker.matcher.Url\" rel=\"Autolinker.matcher.Url\" class=\"docClass\">UrlMatcher</a>.</p>\n\n<p>Due to the limitations of regular expressions (including the missing feature\nof look-behinds in JS regular expressions), we cannot always determine the\nvalidity of a given match. This class applies a bit of additional logic to\nfilter out any false positives that have been matched by the\n<a href=\"#!/api/Autolinker.matcher.Url\" rel=\"Autolinker.matcher.Url\" class=\"docClass\">UrlMatcher</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-hasFullProtocolRegex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.UrlMatchValidator'>Autolinker.matcher.UrlMatchValidator</span><br/><a href='source/UrlMatchValidator.html#Autolinker-matcher-UrlMatchValidator-property-hasFullProtocolRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.UrlMatchValidator-property-hasFullProtocolRegex' class='name expandable'>hasFullProtocolRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Regex to test for a full protocol, with the two trailing slashes. ...</div><div class='long'><p>Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'</p>\n<p>Defaults to: <code>/^[A-Za-z][-.+A-Za-z0-9]*:\\/\\//</code></p></div></div></div><div id='property-hasWordCharAfterProtocolRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.UrlMatchValidator'>Autolinker.matcher.UrlMatchValidator</span><br/><a href='source/UrlMatchValidator.html#Autolinker-matcher-UrlMatchValidator-property-hasWordCharAfterProtocolRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.UrlMatchValidator-property-hasWordCharAfterProtocolRegex' class='name expandable'>hasWordCharAfterProtocolRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Regex to determine if at least one word char exists after the protocol (i.e. ...</div><div class='long'><p>Regex to determine if at least one word char exists after the protocol (i.e. after the ':')</p>\n</div></div></div><div id='property-ipRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.UrlMatchValidator'>Autolinker.matcher.UrlMatchValidator</span><br/><a href='source/UrlMatchValidator.html#Autolinker-matcher-UrlMatchValidator-property-ipRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.UrlMatchValidator-property-ipRegex' class='name expandable'>ipRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Regex to determine if the string is a valid IP address ...</div><div class='long'><p>Regex to determine if the string is a valid IP address</p>\n<p>Defaults to: <code>/[0-9][0-9]?[0-9]?\\.[0-9][0-9]?[0-9]?\\.[0-9][0-9]?[0-9]?\\.[0-9][0-9]?[0-9]?(:[0-9]*)?\\/?$/</code></p></div></div></div><div id='property-uriSchemeRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.UrlMatchValidator'>Autolinker.matcher.UrlMatchValidator</span><br/><a href='source/UrlMatchValidator.html#Autolinker-matcher-UrlMatchValidator-property-uriSchemeRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.UrlMatchValidator-property-uriSchemeRegex' class='name expandable'>uriSchemeRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Regex to find the URI scheme, such as 'mailto:'. ...</div><div class='long'><p>Regex to find the URI scheme, such as 'mailto:'.</p>\n\n<p>This is used to filter out 'javascript:' and 'vbscript:' schemes.</p>\n<p>Defaults to: <code>/^[A-Za-z][-.+A-Za-z0-9]*:/</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-containsMultipleDots' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.UrlMatchValidator'>Autolinker.matcher.UrlMatchValidator</span><br/><a href='source/UrlMatchValidator.html#Autolinker-matcher-UrlMatchValidator-method-containsMultipleDots' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.UrlMatchValidator-method-containsMultipleDots' class='name expandable'>containsMultipleDots</a>( <span class='pre'>urlMatch</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>urlMatch</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-isValid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.UrlMatchValidator'>Autolinker.matcher.UrlMatchValidator</span><br/><a href='source/UrlMatchValidator.html#Autolinker-matcher-UrlMatchValidator-method-isValid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.UrlMatchValidator-method-isValid' class='name expandable'>isValid</a>( <span class='pre'>urlMatch, protocolUrlMatch</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Determines if a given URL match found by the UrlMatcher\nis valid. ...</div><div class='long'><p>Determines if a given URL match found by the <a href=\"#!/api/Autolinker.matcher.Url\" rel=\"Autolinker.matcher.Url\" class=\"docClass\">UrlMatcher</a>\nis valid. Will return <code>false</code> for:</p>\n\n<p>1) URL matches which do not have at least have one period ('.') in the\n   domain name (effectively skipping over matches like \"abc:def\").\n   However, URL matches with a protocol will be allowed (ex: 'http://localhost')\n2) URL matches which do not have at least one word character in the\n   domain name (effectively skipping over matches like \"git:1.0\").\n3) A protocol-relative url match (a URL beginning with '//') whose\n   previous character is a word character (effectively skipping over\n   strings like \"abc//google.com\")</p>\n\n<p>Otherwise, returns <code>true</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>urlMatch</span> : String<div class='sub-desc'><p>The matched URL, if there was one. Will be an\n  empty string if the match is not a URL match.</p>\n</div></li><li><span class='pre'>protocolUrlMatch</span> : String<div class='sub-desc'><p>The match URL string for a protocol\n  match. Ex: 'http://yahoo.com'. This is used to match something like\n  'http://localhost', where we won't double check that the domain name\n  has at least one '.' in it.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if the match given is valid and should be\n  processed, or <code>false</code> if the match is invalid and/or should just not be\n  processed.</p>\n</div></li></ul></div></div></div><div id='method-isValidIpAddress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.UrlMatchValidator'>Autolinker.matcher.UrlMatchValidator</span><br/><a href='source/UrlMatchValidator.html#Autolinker-matcher-UrlMatchValidator-method-isValidIpAddress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.UrlMatchValidator-method-isValidIpAddress' class='name expandable'>isValidIpAddress</a>( <span class='pre'>uriSchemeMatch</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uriSchemeMatch</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-isValidUriScheme' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.UrlMatchValidator'>Autolinker.matcher.UrlMatchValidator</span><br/><a href='source/UrlMatchValidator.html#Autolinker-matcher-UrlMatchValidator-method-isValidUriScheme' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.UrlMatchValidator-method-isValidUriScheme' class='name expandable'>isValidUriScheme</a>( <span class='pre'>uriSchemeMatch</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Determines if the URI scheme is a valid scheme to be autolinked. ...</div><div class='long'><p>Determines if the URI scheme is a valid scheme to be autolinked. Returns\n<code>false</code> if the scheme is 'javascript:' or 'vbscript:'</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uriSchemeMatch</span> : String<div class='sub-desc'><p>The match URL string for a full URI scheme\n  match. Ex: 'http://yahoo.com' or 'mailto:a@a.com'.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if the scheme is a valid one, <code>false</code> otherwise.</p>\n</div></li></ul></div></div></div><div id='method-urlMatchDoesNotHaveAtLeastOneWordChar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.UrlMatchValidator'>Autolinker.matcher.UrlMatchValidator</span><br/><a href='source/UrlMatchValidator.html#Autolinker-matcher-UrlMatchValidator-method-urlMatchDoesNotHaveAtLeastOneWordChar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.UrlMatchValidator-method-urlMatchDoesNotHaveAtLeastOneWordChar' class='name expandable'>urlMatchDoesNotHaveAtLeastOneWordChar</a>( <span class='pre'>urlMatch, protocolUrlMatch</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Determines if a URL match does not have at least one word character after\nthe protocol (i.e. ...</div><div class='long'><p>Determines if a URL match does not have at least one word character after\nthe protocol (i.e. in the domain name).</p>\n\n<p>At least one letter character must exist in the domain name after a\nprotocol match. Ex: skip over something like \"git:1.0\"</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>urlMatch</span> : String<div class='sub-desc'><p>The matched URL, if there was one. Will be an\n  empty string if the match is not a URL match.</p>\n</div></li><li><span class='pre'>protocolUrlMatch</span> : String<div class='sub-desc'><p>The match URL string for a protocol\n  match. Ex: 'http://yahoo.com'. This is used to know whether or not we\n  have a protocol in the URL string, in order to check for a word\n  character after the protocol separator (':').</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if the URL match does not have at least one word\n  character in it after the protocol, <code>false</code> otherwise.</p>\n</div></li></ul></div></div></div><div id='method-urlMatchDoesNotHaveProtocolOrDot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.UrlMatchValidator'>Autolinker.matcher.UrlMatchValidator</span><br/><a href='source/UrlMatchValidator.html#Autolinker-matcher-UrlMatchValidator-method-urlMatchDoesNotHaveProtocolOrDot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.UrlMatchValidator-method-urlMatchDoesNotHaveProtocolOrDot' class='name expandable'>urlMatchDoesNotHaveProtocolOrDot</a>( <span class='pre'>urlMatch, protocolUrlMatch</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Determines if a URL match does not have either:\n\na) a full protocol (i.e. ...</div><div class='long'><p>Determines if a URL match does not have either:</p>\n\n<p>a) a full protocol (i.e. 'http://'), or\nb) at least one dot ('.') in the domain name (for a non-full-protocol\n   match).</p>\n\n<p>Either situation is considered an invalid URL (ex: 'git:d' does not have\neither the '://' part, or at least one dot in the domain name. If the\nmatch was 'git:abc.com', we would consider this valid.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>urlMatch</span> : String<div class='sub-desc'><p>The matched URL, if there was one. Will be an\n  empty string if the match is not a URL match.</p>\n</div></li><li><span class='pre'>protocolUrlMatch</span> : String<div class='sub-desc'><p>The match URL string for a protocol\n  match. Ex: 'http://yahoo.com'. This is used to match something like\n  'http://localhost', where we won't double check that the domain name\n  has at least one '.' in it.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if the URL match does not have a full protocol,\n  or at least one dot ('.') in a non-full-protocol match.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});