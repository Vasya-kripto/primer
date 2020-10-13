(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{452:function(s,a,t){"use strict";t.r(a);var e=t(53),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"block-and-unblock-a-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#block-and-unblock-a-user"}},[s._v("#")]),s._v(" Block and unblock a user")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Rewards")]),s._v(" "),t("p",[s._v("Upon completing this challenge, you will be rewarded "),t("strong",[s._v("50 Desmos Tokens")]),s._v(".")]),s._v(" "),t("p",[s._v("Please note that in order to prevent spam, you will receive the reward just "),t("strong",[s._v("for the first block and unblock")]),s._v(" you create. No tokens will be awarded for later blocks/unblocks.")])]),s._v(" "),t("p",[s._v("Starting from version "),t("code",[s._v("v0.12.0")]),s._v(", you can now block and unblock users.")]),s._v(" "),t("h2",{attrs:{id:"blocking-and-unblocking-your-first-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blocking-and-unblocking-your-first-user"}},[s._v("#")]),s._v(" Blocking and unblocking your first user")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Requirements")]),s._v(" "),t("p",[s._v("To block or unblock a user, you will need their address.")])]),s._v(" "),t("h3",{attrs:{id:"blocking-a-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blocking-a-user"}},[s._v("#")]),s._v(" Blocking a user")]),s._v(" "),t("p",[s._v("To block a user, you have to use the following command:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("desmoscli tx relationships block "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("User address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Subspace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Optional"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Reason"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --from "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-key-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --yes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --chain-id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("Here's an example of such command:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("desmoscli tx relationships block "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  desmos1j2hyp3mzrxfhdkxzyvyqw9atu2s3smt89mklxs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I don\'t like you"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --from jack --yes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --chain-id morpheus-10000\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("Once you run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this:")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("txhash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" E4920B61BFCFB935124FFC22BC04C1D5619943B138C87913E6EBCF2B5E892290\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("code")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rawlog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[]'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gaswanted")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gasused")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token null important"}},[s._v("null")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("To make sure the transaction has been processed successfully, you can query it using the following command:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("desmoscli query tx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hash"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --trust-node --output json\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# desmoscli query tx E4920B61BFCFB935124FFC22BC04C1D5619943B138C87913E6EBCF2B5E892290 \\")]),s._v("\n  --trust-node --output json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("This will return you the JSON representation of the transaction itself.")]),s._v(" "),t("h3",{attrs:{id:"unblocking-a-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unblocking-a-user"}},[s._v("#")]),s._v(" Unblocking a user")]),s._v(" "),t("p",[s._v("To unblock a user, you have to use the following command:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("desmoscli tx relationships unblock "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("User address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Subspace"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --from "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-key-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --yes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --chain-id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("Here's an example of such command:")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("desmoscli tx relationships unblock "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  desmos1j2hyp3mzrxfhdkxzyvyqw9atu2s3smt89mklxs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --from jack --yes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --chain-id morpheus-10000\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("Once you run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this:")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("txhash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" E4920B61BFCFB935124FFC22BC04C1D5619943B138C87913E6EBCF2B5E892290\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("code")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rawlog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[]'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gaswanted")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gasused")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token null important"}},[s._v("null")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("To make sure the transaction has been processed successfully, you can query it using the following command:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("desmoscli query tx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("hash"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --trust-node --output json\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# desmoscli query tx E4920B61BFCFB935124FFC22BC04C1D5619943B138C87913E6EBCF2B5E892290 \\")]),s._v("\n  --trust-node --output json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("This will return you the JSON representation of the transaction itself.")]),s._v(" "),t("h2",{attrs:{id:"getting-the-reward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-reward"}},[s._v("#")]),s._v(" Getting the reward")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("Two transactions required")]),s._v(" "),t("p",[s._v("To get this challenge's reward, you need to submit "),t("strong",[s._v("two")]),s._v(" transaction hashes, and not only one. One needs to be the one returned after you blocked a user, and the other one after you unblocked a user."),t("br"),s._v("\nFailing to provide either one of the two will result in "),t("strong",[s._v("no rewards")]),s._v(" given.")])]),s._v(" "),t("p",[s._v("After you've blocked and unblocked a user, to make sure you receive your reward please follow this procedure:")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Create a fork of this repo inside your private GitHub profile."),t("br"),s._v("\nIf you do not know how to do it, follow the "),t("a",{attrs:{href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub fork guide"),t("OutboundLink")],1),s._v(".")])]),s._v(" "),t("li",[t("p",[s._v("Pull the fork locally:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/primer.git ~/desmos-primer\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/desmos-primer\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Make sure your fork is up to date with the Primer repository:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" upstream https://github.com/desmos-labs/primer.git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch upstream\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase upstream/master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Create a file named after your GitHub username containing the first transaction hash:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<tx-hash>"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ./phase-6/submissions/block-user/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-github-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "E4920B61BFCFB935124FFC22BC04C1D5619943B138C87913E6EBCF2B5E892290" >> ./phase-6/submissions/block-user/RiccardoM')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Create a file named after your GitHub username containing the second transaction hash:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<tx-hash>"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ./phase-6/submissions/unblock-user/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-github-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "E4920B61BFCFB935124FFC22BC04C1D5619943B138C87913E6EBCF2B5E892290" >> ./phase-6/submissions/unblock-user/RiccardoM')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the "),t("a",{attrs:{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Pull Requests guide"),t("OutboundLink")],1),s._v(".")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);