webpackJsonp([177,210],{

/***/ 826:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "A dropdown list."
	    ],
	    [
	      "h2",
	      "When To Use"
	    ],
	    [
	      "p",
	      "If there are too many operations to display, you can wrap them in a ",
	      [
	        "code",
	        "Dropdown"
	      ],
	      ". By clicking/hovering on the trigger, a dropdown menu should appear, which allows you to choose one option and execute relevant actions."
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "type": "Navigation",
	    "title": "Dropdown",
	    "filename": "components/dropdown/index.en-US.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#When-To-Use"
	        },
	        "When To Use"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#API"
	        },
	        "API"
	      ]
	    ]
	  ],
	  "api": [
	    "section",
	    [
	      "h2",
	      "API"
	    ],
	    [
	      "h3",
	      "Dropdown"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "Property"
	          ],
	          [
	            "th",
	            "Description"
	          ],
	          [
	            "th",
	            "Type"
	          ],
	          [
	            "th",
	            "Default"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "trigger"
	          ],
	          [
	            "td",
	            "the trigger mode which can execute the drop-down action"
	          ],
	          [
	            "td",
	            "Array<'click'",
	            "|",
	            "'hover'>"
	          ],
	          [
	            "td",
	            "['hover']"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "overlay"
	          ],
	          [
	            "td",
	            "the dropdown menu"
	          ],
	          [
	            "td",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "/components/menu"
	              },
	              "Menu"
	            ]
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "getPopupContainer"
	          ],
	          [
	            "td",
	            "to set the container of the dropdown menu. The default is to create a ",
	            [
	              "code",
	              "div"
	            ],
	            " element in ",
	            [
	              "code",
	              "body"
	            ],
	            ", you can reset it to the scrolling area and make a relative reposition. ",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "http://codepen.io/anon/pen/xVBOVQ?editors=001"
	              },
	              "example"
	            ]
	          ],
	          [
	            "td",
	            "Function(triggerNode)"
	          ],
	          [
	            "td",
	            "() => document.body"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "visible"
	          ],
	          [
	            "td",
	            "determine whether the dropdown menu is visible"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onVisibleChange"
	          ],
	          [
	            "td",
	            "a callback function takes an argument: ",
	            [
	              "code",
	              "visible"
	            ],
	            ", can be executed when the visible state is changing"
	          ],
	          [
	            "td",
	            "Function"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ]
	      ]
	    ],
	    [
	      "p",
	      "You can get the menu list by ",
	      [
	        "code",
	        "antd.Menu"
	      ],
	      ", and set a callback function ",
	      [
	        "code",
	        "onSelect"
	      ],
	      " for it if you need. The menu items and the dividers are also available, by using ",
	      [
	        "code",
	        "antd.Menu.Item"
	      ],
	      " and ",
	      [
	        "code",
	        "antd.Menu.Divider"
	      ],
	      " respectively."
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "Warning: You must set a unique ",
	        [
	          "code",
	          "key"
	        ],
	        " for ",
	        [
	          "code",
	          "Menu.Item"
	        ],
	        "."
	      ]
	    ],
	    [
	      "h3",
	      "Dropdown.Button"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "Property"
	          ],
	          [
	            "th",
	            "Description"
	          ],
	          [
	            "th",
	            "Type"
	          ],
	          [
	            "th",
	            "Default"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "type"
	          ],
	          [
	            "td",
	            "type of the button, the same as ",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "/components/button"
	              },
	              "Button"
	            ]
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "'default'"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onClick"
	          ],
	          [
	            "td",
	            "a callback function, the same as ",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "/components/button"
	              },
	              "Button"
	            ],
	            ", which will be executed when you click the button on the left"
	          ],
	          [
	            "td",
	            "Function"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "trigger"
	          ],
	          [
	            "td",
	            "the trigger mode which can execute the drop-down action"
	          ],
	          [
	            "td",
	            "Array<'click'",
	            "|",
	            "'hover'>"
	          ],
	          [
	            "td",
	            "['hover']"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "overlay"
	          ],
	          [
	            "td",
	            "the dropdown menu"
	          ],
	          [
	            "td",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "/components/menu"
	              },
	              "Menu"
	            ]
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "visible"
	          ],
	          [
	            "td",
	            "determine whether the dropdown menu is visible"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onVisibleChange"
	          ],
	          [
	            "td",
	            "a callback function takes an argument: ",
	            [
	              "code",
	              "visible"
	            ],
	            ", can be executed when the visible state is changing"
	          ],
	          [
	            "td",
	            "Function"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ]
	      ]
	    ]
	  ]
	};

/***/ }

});