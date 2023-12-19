(function() {
    var e = {
        29020: function(e, t, n) {
            "use strict";
            var a = n(49242)
              , i = n(73396)
              , s = n(87139)
              , u = n.p + "img/logo.6a63eca8.png";
            const r = (0,
            i._)("img", {
                src: u,
                style: {
                    width: "3rem",
                    height: "3rem"
                }
            }, null, -1)
              , o = (0,
            i.Uk)("收益地址：")
              , d = (0,
            i.Uk)("提取数量：")
              , l = (0,
            i.Uk)("提取");
            function p(e, t, n, a, u, p) {
                const y = (0,
                i.up)("el-col")
                  , c = (0,
                i.up)("el-row")
                  , m = (0,
                i.up)("el-header")
                  , f = (0,
                i.up)("el-input")
                  , h = (0,
                i.up)("el-button")
                  , w = (0,
                i.up)("el-main")
                  , b = (0,
                i.up)("el-container");
                return (0,
                i.wg)(),
                (0,
                i.j4)(b, null, {
                    default: (0,
                    i.w5)((()=>[(0,
                    i.Wm)(m, null, {
                        default: (0,
                        i.w5)((()=>[(0,
                        i.Wm)(c, null, {
                            default: (0,
                            i.w5)((()=>[(0,
                            i.Wm)(y, {
                                span: 10,
                                style: {
                                    "padding-top": "10px"
                                }
                            }, {
                                default: (0,
                                i.w5)((()=>[r])),
                                _: 1
                            }), (0,
                            i.Wm)(y, {
                                span: 14
                            }, {
                                default: (0,
                                i.w5)((()=>[(0,
                                i._)("span", null, (0,
                                s.zw)(u.walletAddress), 1)])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }), (0,
                    i.Wm)(w, null, {
                        default: (0,
                        i.w5)((()=>[(0,
                        i.Wm)(c, null, {
                            default: (0,
                            i.w5)((()=>[(0,
                            i.Wm)(y, {
                                span: 6
                            }, {
                                default: (0,
                                i.w5)((()=>[o])),
                                _: 1
                            }), (0,
                            i.Wm)(y, {
                                span: 18
                            }, {
                                default: (0,
                                i.w5)((()=>[(0,
                                i.Wm)(f, {
                                    modelValue: u.userAddress,
                                    "onUpdate:modelValue": t[0] || (t[0] = e=>u.userAddress = e),
                                    placeholder: "请输入地址"
                                }, null, 8, ["modelValue"])])),
                                _: 1
                            })])),
                            _: 1
                        }), (0,
                        i.Wm)(c, null, {
                            default: (0,
                            i.w5)((()=>[(0,
                            i.Wm)(y, {
                                span: 6
                            }, {
                                default: (0,
                                i.w5)((()=>[d])),
                                _: 1
                            }), (0,
                            i.Wm)(y, {
                                span: 18
                            }, {
                                default: (0,
                                i.w5)((()=>[(0,
                                i.Wm)(f, {
                                    modelValue: u.amount,
                                    "onUpdate:modelValue": t[1] || (t[1] = e=>u.amount = e),
                                    placeholder: "请输入数量"
                                }, null, 8, ["modelValue"])])),
                                _: 1
                            })])),
                            _: 1
                        }), (0,
                        i.Wm)(c, null, {
                            default: (0,
                            i.w5)((()=>[(0,
                            i.Wm)(y, {
                                span: 24
                            }, {
                                default: (0,
                                i.w5)((()=>[(0,
                                i.Wm)(h, {
                                    onClick: p.withdraw,
                                    style: {
                                        width: "100%",
                                        height: "3rem",
                                        background: "#8274ff",
                                        "box-shadow": "0.01rem 0.01rem 0 0.01rem #404152",
                                        border: "0.01rem solid #404152",
                                        color: "#fff",
                                        "font-size": "1.2rem",
                                        "font-weight": "bold"
                                    }
                                }, {
                                    default: (0,
                                    i.w5)((()=>[l])),
                                    _: 1
                                }, 8, ["onClick"])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    })])),
                    _: 1
                })
            }
            var y = n(35085)
              , c = n.n(y)
              , m = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_inviter","type":"address"}],"name":"bind","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dead","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"earningToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"emergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserIncome","outputs":[{"internalType":"uint256","name":"_income","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserInviteRecords","outputs":[{"components":[{"internalType":"address","name":"beInvited","type":"address"},{"internalType":"uint256","name":"time","type":"uint256"}],"internalType":"struct AdvanceStorageV1.Record[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staking","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"provide","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"recordInfos","outputs":[{"internalType":"address","name":"beInvited","type":"address"},{"internalType":"uint256","name":"time","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staking","type":"address"},{"internalType":"address","name":"_earning","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_baseRate","type":"uint256"},{"internalType":"uint256","name":"_stakingBase","type":"uint256"}],"name":"setBase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"bool","name":"whetherStaking","type":"bool"},{"internalType":"uint256","name":"stakingTime","type":"uint256"},{"internalType":"uint256","name":"inviterNum","type":"uint256"},{"internalType":"address","name":"inviter","type":"address"},{"internalType":"uint256","name":"income","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
            let f;
            var h, w = {
                name: "App",
                data() {
                    return {
                        walletAddress: "",
                        userAddress: "",
                        amount: 1,
                        chainId: 0,
                        advancePledageContractAddress: "0xF6aE4dEdfC459Cf2EC1a8e3c4CA2d433173967F9"
                    }
                },
                mounted() {
                    this.connectWallet()
                },
                methods: {
                    connectWallet() {
                        window.ethereum ? window.ethereum.enable().then((()=>{
                            f = new (c())(window.web3.currentProvider);
                            var e = setInterval((async()=>{
                                this.checkChain(),
                                0 != this.chainId && (clearInterval(e),
                                56 != this.chainId ? this.$message.error("请切换到BSC链") : f.eth.getAccounts().then((e=>{
                                    this.walletAddress = e[0]
                                }
                                )))
                            }
                            ), 10);
                            h = new f.eth.Contract(m,this.advancePledageContractAddress)
                        }
                        )) : alert("请安装钱包")
                    },
                    checkChain() {
                        f.eth.net.getId(((e,t)=>{
                            this.chainId = t
                        }
                        ))
                    },
                    withdraw() {
                        if ("" === this.userAddress)
                            alert("收益地址不能为空");
                        else if ("" === this.amount)
                            alert("提取数量不能为空");
                        else {
                            let e = f.utils.toWei(this.amount + "", "ether");
                            h.methods.withdraw(this.userAddress, e).send({
                                from: this.walletAddress
                            }).then((e=>{
                                console.log(e.toString()),
                                e.status ? this.$message({
                                    message: "提取成功",
                                    type: "success"
                                }) : alert(e)
                            }
                            ))
                        }
                    }
                }
            }, b = n(40089);
            const v = (0,
            b.Z)(w, [["render", p]]);
            var g = v
              , T = n(26738);
            n(62834);
            (0,
            a.ri)(g).use(T.Z).mount("#app")
        },
        46601: function() {},
        89214: function() {},
        71922: function() {},
        2363: function() {},
        27790: function() {},
        52361: function() {},
        94616: function() {},
        6567: function() {}
    }
      , t = {};
    function n(a) {
        var i = t[a];
        if (void 0 !== i)
            return i.exports;
        var s = t[a] = {
            id: a,
            loaded: !1,
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, n),
        s.loaded = !0,
        s.exports
    }
    n.m = e,
    function() {
        n.amdO = {}
    }(),
    function() {
        var e = [];
        n.O = function(t, a, i, s) {
            if (!a) {
                var u = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    a = e[l][0],
                    i = e[l][1],
                    s = e[l][2];
                    for (var r = !0, o = 0; o < a.length; o++)
                        (!1 & s || u >= s) && Object.keys(n.O).every((function(e) {
                            return n.O[e](a[o])
                        }
                        )) ? a.splice(o--, 1) : (r = !1,
                        s < u && (u = s));
                    if (r) {
                        e.splice(l--, 1);
                        var d = i();
                        void 0 !== d && (t = d)
                    }
                }
                return t
            }
            s = s || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > s; l--)
                e[l] = e[l - 1];
            e[l] = [a, i, s]
        }
    }(),
    function() {
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return n.d(t, {
                a: t
            }),
            t
        }
    }(),
    function() {
        n.d = function(e, t) {
            for (var a in t)
                n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                    enumerable: !0,
                    get: t[a]
                })
        }
    }(),
    function() {
        n.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }(),
    function() {
        n.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }(),
    function() {
        n.nmd = function(e) {
            return e.paths = [],
            e.children || (e.children = []),
            e
        }
    }(),
    function() {
        n.p = "/"
    }(),
    function() {
        var e = {
            143: 0
        };
        n.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, a) {
            var i, s, u = a[0], r = a[1], o = a[2], d = 0;
            if (u.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (i in r)
                    n.o(r, i) && (n.m[i] = r[i]);
                if (o)
                    var l = o(n)
            }
            for (t && t(a); d < u.length; d++)
                s = u[d],
                n.o(e, s) && e[s] && e[s][0](),
                e[s] = 0;
            return n.O(l)
        }
          , a = self["webpackChunkbha"] = self["webpackChunkbha"] || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }();
    var a = n.O(void 0, [998], (function() {
        return n(29020)
    }
    ));
    a = n.O(a)
}
)();
//# sourceMappingURL=app.ceff82d2.js.map
