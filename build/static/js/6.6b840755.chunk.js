(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [6], {
        1073: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, "default", (function() {
                return pr
            }));
            var r, i, c, a, o, s, l, d, b, j, u, x, p, O, h, m, f, g, v, y, k, w, S, L, T, C, A, q, I, P, Q, E, D, z, B, U, N, R, F, M, H, K, V, X, G, W, Y, J, $, Z, _, ee, ne, te, re = t(15),
                ie = t(22),
                ce = t(18),
                ae = t(0),
                oe = t.n(ae),
                se = t(44),
                le = t(25),
                de = t(13),
                be = t.n(de),
                je = t(27),
                ue = t(12),
                xe = t(8),
                pe = t(150),
                Oe = t(398),
                he = t(246),
                me = t(45),
                fe = t(151),
                ge = t(40),
                ve = t(46),
                ye = t(54),
                ke = t(72),
                we = t(80),
                Se = t(245),
                Le = t(867),
                Te = function(e) {
                    var n = e.quoteTokenAdresses,
                        t = e.tokenAddresses,
                        r = n[56],
                        i = t[56];
                    return "".concat(r, "/").concat(i)
                },
                Ce = t(5),
                Ae = xe.e.div(r || (r = Object(ce.a)(["\n  margin-top: 24px;\n"]))),
                qe = Object(xe.e)(ue.z)(i || (i = Object(ce.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ", ";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ", ";\n  }\n"])), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    return e.theme.colors.primary
                })),
                Ie = function(e) {
                    var n = e.bscScanAddress,
                        t = e.removed,
                        r = e.totalValueFormated,
                        i = e.lpLabel,
                        c = e.addLiquidityUrl,
                        a = Object(ye.a)();
                    return Object(Ce.jsxs)(Ae, {
                        children: [Object(Ce.jsxs)(ue.s, {
                            justifyContent: "space-between",
                            children: [Object(Ce.jsxs)(ue.L, {
                                children: [a(316, "Stake"), ":"]
                            }), Object(Ce.jsx)(qe, {
                                href: c,
                                children: i
                            })]
                        }), !t && Object(Ce.jsxs)(ue.s, {
                            justifyContent: "space-between",
                            children: [Object(Ce.jsxs)(ue.L, {
                                children: [a(23, "Total Liquidity"), ":"]
                            }), Object(Ce.jsx)(ue.L, {
                                children: r
                            })]
                        }), Object(Ce.jsx)(ue.s, {
                            justifyContent: "flex-start",
                            children: Object(Ce.jsx)(ue.y, {
                                external: !0,
                                href: n,
                                bold: !1,
                                children: a(356, "View on BscScan")
                            })
                        })]
                    })
                },
                Pe = t(171),
                Qe = Object(xe.e)(ue.s)(c || (c = Object(ce.a)(["\n  svg {\n    margin-right: 4px;\n  }\n"]))),
                Ee = Object(xe.e)(ue.K)(a || (a = Object(ce.a)(["\n  margin-left: 4px;\n"]))),
                De = function(e) {
                    var n = e.lpLabel,
                        t = e.multiplier,
                        r = e.isCommunityFarm,
                        i = e.farmImage,
                        c = e.tokenSymbol;
                    return Object(Ce.jsxs)(Qe, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: "12px",
                        children: [Object(Ce.jsx)(ue.w, {
                            src: "/images/farms/".concat(i, ".svg"),
                            alt: c,
                            width: 64,
                            height: 64
                        }), Object(Ce.jsxs)(ue.s, {
                            flexDirection: "column",
                            alignItems: "flex-end",
                            children: [Object(Ce.jsx)(ue.t, {
                                mb: "4px",
                                children: n.split(" ")[0]
                            }), Object(Ce.jsxs)(ue.s, {
                                justifyContent: "center",
                                children: [r ? Object(Ce.jsx)(Pe.b, {}) : Object(Ce.jsx)(Pe.c, {}), Object(Ce.jsx)(Ee, {
                                    variant: "secondary",
                                    children: t
                                })]
                            })]
                        })]
                    })
                },
                ze = t(2),
                Be = t.n(ze),
                Ue = t(11),
                Ne = t(24),
                Re = t(41),
                Fe = t(65),
                Me = t(248),
                He = t(242),
                Ke = t(255),
                Ve = t(256),
                Xe = t(116),
                Ge = xe.e.div(o || (o = Object(ce.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])), (function(e) {
                    return e.theme.colors.input
                }), (function(e) {
                    var n = e.isWarning,
                        t = void 0 !== n && n,
                        r = e.theme;
                    return t ? r.shadows.warning : r.shadows.inset
                }), (function(e) {
                    return e.theme.colors.text
                })),
                We = Object(xe.e)(ue.x)(s || (s = Object(ce.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n\n  ", " {\n    width: 80px;\n  }\n\n  ", " {\n    width: auto;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.xs
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                Ye = Object(xe.e)(ue.L)(l || (l = Object(ce.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),
                Je = function(e) {
                    var n = e.max,
                        t = e.symbol,
                        r = e.onChange,
                        i = e.onSelectMax,
                        c = e.value,
                        a = e.addLiquidityUrl,
                        o = e.inputTitle,
                        s = Object(ye.a)(),
                        l = "0" === n || !n,
                        d = l ? "0" : parseFloat(n).toFixed(4);
                    return Object(Ce.jsxs)("div", {
                        style: {
                            position: "relative"
                        },
                        children: [Object(Ce.jsxs)(Ge, {
                            isWarning: l,
                            children: [Object(Ce.jsxs)(ue.s, {
                                justifyContent: "space-between",
                                pl: "16px",
                                children: [Object(Ce.jsx)(ue.L, {
                                    fontSize: "14px",
                                    children: o
                                }), Object(Ce.jsxs)(ue.L, {
                                    fontSize: "14px",
                                    children: [s(1120, "Balance"), ": ", d.toLocaleString()]
                                })]
                            }), Object(Ce.jsxs)(ue.s, {
                                alignItems: "flex-end",
                                justifyContent: "space-around",
                                children: [Object(Ce.jsx)(We, {
                                    onChange: r,
                                    placeholder: "0",
                                    value: c
                                }), Object(Ce.jsx)(ue.g, {
                                    scale: "sm",
                                    onClick: i,
                                    mr: "8px",
                                    children: s(452, "Max")
                                }), Object(Ce.jsx)(ue.L, {
                                    fontSize: "16px",
                                    children: t
                                })]
                            })]
                        }), l && Object(Ce.jsxs)(Ye, {
                            fontSize: "14px",
                            color: "failure",
                            children: ["No tokens to stake:", " ", Object(Ce.jsxs)(ue.y, {
                                fontSize: "14px",
                                bold: !1,
                                href: a,
                                external: !0,
                                color: "failure",
                                children: [s(999, "get"), " ", t]
                            })]
                        })]
                    })
                },
                $e = function(e) {
                    var n = e.max,
                        t = e.onConfirm,
                        r = e.onDismiss,
                        i = e.tokenName,
                        c = void 0 === i ? "" : i,
                        a = e.addLiquidityUrl,
                        o = Object(ae.useState)(""),
                        s = Object(ie.a)(o, 2),
                        l = s[0],
                        d = s[1],
                        b = Object(ae.useState)(!1),
                        j = Object(ie.a)(b, 2),
                        u = j[0],
                        x = j[1],
                        p = Object(ye.a)(),
                        O = Object(ae.useMemo)((function() {
                            return Object(ke.b)(n)
                        }), [n]),
                        h = Object(ae.useCallback)((function(e) {
                            d(e.currentTarget.value)
                        }), [d]),
                        m = Object(ae.useCallback)((function() {
                            d(O)
                        }), [O, d]);
                    return Object(Ce.jsxs)(ue.E, {
                        title: p(1068, "Stake LP tokens"),
                        onDismiss: r,
                        children: [Object(Ce.jsx)(Je, {
                            value: l,
                            onSelectMax: m,
                            onChange: h,
                            max: O,
                            symbol: c,
                            addLiquidityUrl: a,
                            inputTitle: p(1070, "Stake")
                        }), Object(Ce.jsxs)(Xe.a, {
                            children: [Object(Ce.jsx)(ue.g, {
                                variant: "secondary",
                                onClick: r,
                                width: "100%",
                                children: p(462, "Cancel")
                            }), Object(Ce.jsx)(ue.g, {
                                width: "100%",
                                disabled: u || "0" === O || "0" === l,
                                onClick: Object(Ue.a)(Be.a.mark((function e() {
                                    return Be.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return x(!0), e.next = 3, t(l);
                                            case 3:
                                                x(!1), r();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: u ? p(488, "Pending Confirmation") : p(464, "Confirm")
                            })]
                        }), Object(Ce.jsxs)(ue.z, {
                            href: a,
                            style: {
                                alignSelf: "center"
                            },
                            children: [p(999, "Get"), " ", c]
                        })]
                    })
                },
                Ze = function(e) {
                    var n = e.onConfirm,
                        t = e.onDismiss,
                        r = e.max,
                        i = e.tokenName,
                        c = void 0 === i ? "" : i,
                        a = Object(ae.useState)(""),
                        o = Object(ie.a)(a, 2),
                        s = o[0],
                        l = o[1],
                        d = Object(ae.useState)(!1),
                        b = Object(ie.a)(d, 2),
                        j = b[0],
                        u = b[1],
                        x = Object(ye.a)(),
                        p = Object(ae.useMemo)((function() {
                            return Object(ke.b)(r)
                        }), [r]),
                        O = Object(ae.useCallback)((function(e) {
                            l(e.currentTarget.value)
                        }), [l]),
                        h = Object(ae.useCallback)((function() {
                            l(p)
                        }), [p, l]);
                    return Object(Ce.jsxs)(ue.E, {
                        title: x(1126, "Unstake LP tokens"),
                        onDismiss: t,
                        children: [Object(Ce.jsx)(Je, {
                            onSelectMax: h,
                            onChange: O,
                            value: s,
                            max: p,
                            symbol: c,
                            inputTitle: x(588, "Unstake")
                        }), Object(Ce.jsxs)(Xe.a, {
                            children: [Object(Ce.jsx)(ue.g, {
                                variant: "secondary",
                                onClick: t,
                                width: "100%",
                                children: x(462, "Cancel")
                            }), Object(Ce.jsx)(ue.g, {
                                disabled: j,
                                onClick: Object(Ue.a)(Be.a.mark((function e() {
                                    return Be.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return u(!0), e.next = 3, n(s);
                                            case 3:
                                                u(!1), t();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                width: "100%",
                                children: j ? x(488, "Pending Confirmation") : x(464, "Confirm")
                            })]
                        })]
                    })
                },
                _e = xe.e.div(d || (d = Object(ce.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),
                en = function(e) {
                    var n = e.stakedBalance,
                        t = e.tokenBalance,
                        r = e.tokenName,
                        i = e.pid,
                        c = e.addLiquidityUrl,
                        a = Object(ye.a)(),
                        o = Object(Ke.a)(i).onStake,
                        s = Object(Ve.a)(i).onUnstake,
                        l = Object(ke.a)(n),
                        d = l.toLocaleString(),
                        b = Object(ue.X)(Object(Ce.jsx)($e, {
                            max: t,
                            onConfirm: o,
                            tokenName: r,
                            addLiquidityUrl: c
                        })),
                        j = Object(ie.a)(b, 1)[0],
                        u = Object(ue.X)(Object(Ce.jsx)(Ze, {
                            max: n,
                            onConfirm: s,
                            tokenName: r
                        })),
                        x = Object(ie.a)(u, 1)[0];
                    return Object(Ce.jsxs)(ue.s, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [Object(Ce.jsx)(ue.t, {
                            color: 0 === l ? "textDisabled" : "text",
                            children: d
                        }), 0 === l ? Object(Ce.jsx)(ue.g, {
                            onClick: j,
                            children: a(999, "Stake LP")
                        }) : Object(Ce.jsxs)(_e, {
                            children: [Object(Ce.jsx)(ue.v, {
                                variant: "tertiary",
                                onClick: x,
                                mr: "6px",
                                children: Object(Ce.jsx)(ue.D, {
                                    color: "primary",
                                    width: "14px"
                                })
                            }), Object(Ce.jsx)(ue.v, {
                                variant: "tertiary",
                                onClick: j,
                                children: Object(Ce.jsx)(ue.a, {
                                    color: "primary",
                                    width: "14px"
                                })
                            })]
                        })]
                    })
                },
                nn = t(249),
                tn = function(e) {
                    var n = e.earnings,
                        t = e.pid,
                        r = Object(je.c)().account,
                        i = Object(ye.a)(),
                        c = Object(ae.useState)(!1),
                        a = Object(ie.a)(c, 2),
                        o = a[0],
                        s = a[1],
                        l = Object(nn.b)(t).onReward,
                        d = r ? Object(ke.a)(n) : 0,
                        b = d.toLocaleString();
                    return Object(Ce.jsxs)(ue.s, {
                        mb: "8px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [Object(Ce.jsx)(ue.t, {
                            color: 0 === d ? "textDisabled" : "text",
                            children: b
                        }), Object(Ce.jsx)(ue.g, {
                            disabled: 0 === d || o,
                            onClick: Object(Ue.a)(Be.a.mark((function e() {
                                return Be.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s(!0), e.next = 3, l();
                                        case 3:
                                            s(!1);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))),
                            children: i(562, "Harvest")
                        })]
                    })
                },
                rn = xe.e.div(b || (b = Object(ce.a)(["\n  padding-top: 16px;\n"]))),
                cn = function(e) {
                    var n = e.farm,
                        t = e.account,
                        r = e.addLiquidityUrl,
                        i = Object(ye.a)(),
                        c = Object(ae.useState)(!1),
                        a = Object(ie.a)(c, 2),
                        o = a[0],
                        s = a[1],
                        l = Object(me.b)(n.lpSymbol),
                        d = l.pid,
                        b = l.lpAddresses,
                        j = Object(me.c)(d),
                        u = j.allowance,
                        x = j.tokenBalance,
                        p = j.stakedBalance,
                        O = j.earnings,
                        h = Object(Ne.a)(b),
                        m = n.lpSymbol.toUpperCase(),
                        f = t && u && u.isGreaterThan(0),
                        g = Object(Fe.a)(),
                        v = Object(Re.a)(h, g),
                        y = Object(Me.a)(v).onApprove,
                        k = Object(ae.useCallback)(Object(Ue.a)(Be.a.mark((function e() {
                            return Be.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, s(!0), e.next = 4, y();
                                    case 4:
                                        s(!1), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error(e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))), [y]);
                    return Object(Ce.jsxs)(rn, {
                        children: [Object(Ce.jsxs)(ue.s, {
                            children: [Object(Ce.jsx)(ue.L, {
                                bold: !0,
                                textTransform: "uppercase",
                                color: "secondary",
                                fontSize: "12px",
                                pr: "3px",
                                children: "LOLI"
                            }), Object(Ce.jsx)(ue.L, {
                                bold: !0,
                                textTransform: "uppercase",
                                color: "textSubtle",
                                fontSize: "12px",
                                children: i(1072, "Earned")
                            })]
                        }), Object(Ce.jsx)(tn, {
                            earnings: O,
                            pid: d
                        }), Object(Ce.jsxs)(ue.s, {
                            children: [Object(Ce.jsx)(ue.L, {
                                bold: !0,
                                textTransform: "uppercase",
                                color: "secondary",
                                fontSize: "12px",
                                pr: "3px",
                                children: m
                            }), Object(Ce.jsx)(ue.L, {
                                bold: !0,
                                textTransform: "uppercase",
                                color: "textSubtle",
                                fontSize: "12px",
                                children: i(1074, "Staked")
                            })]
                        }), t ? f ? Object(Ce.jsx)(en, {
                            stakedBalance: p,
                            tokenBalance: x,
                            tokenName: m,
                            pid: d,
                            addLiquidityUrl: r
                        }) : Object(Ce.jsx)(ue.g, {
                            mt: "8px",
                            width: "100%",
                            disabled: o,
                            onClick: k,
                            children: i(758, "Approve Contract")
                        }) : Object(Ce.jsx)(He.a, {
                            mt: "8px",
                            width: "100%"
                        })]
                    })
                },
                an = function(e) {
                    var n, t = e.numberOfDays,
                        r = e.farmApy / 100,
                        i = t / 365,
                        c = 1e3 / e.cakePrice,
                        a = c * Math.pow(1 + r / 365, 365 * i);
                    return n = a - c, Math.round(100 * n) / 100
                },
                on = function(e) {
                    return (e.amountEarned / e.amountInvested * 100).toFixed(2)
                },
                sn = xe.e.div(j || (j = Object(ce.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),
                ln = xe.e.div(u || (u = Object(ce.a)(["\n  margin-bottom: '10px';\n"]))),
                dn = Object(xe.e)(ue.L)(x || (x = Object(ce.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),
                bn = function(e) {
                    var n = e.onDismiss,
                        t = e.lpLabel,
                        r = e.cakePrice,
                        i = e.apy,
                        c = e.addLiquidityUrl,
                        a = Object(ye.a)(),
                        o = i.times(new be.a(100)).toNumber(),
                        s = 1e3 / r.toNumber(),
                        l = an({
                            numberOfDays: 1,
                            farmApy: o,
                            cakePrice: r
                        }),
                        d = an({
                            numberOfDays: 7,
                            farmApy: o,
                            cakePrice: r
                        }),
                        b = an({
                            numberOfDays: 30,
                            farmApy: o,
                            cakePrice: r
                        }),
                        j = an({
                            numberOfDays: 365,
                            farmApy: o,
                            cakePrice: r
                        });
                    return Object(Ce.jsxs)(ue.E, {
                        title: "ROI",
                        onDismiss: n,
                        children: [Object(Ce.jsxs)(sn, {
                            children: [Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsx)(ue.L, {
                                    fontSize: "12px",
                                    bold: !0,
                                    color: "textSubtle",
                                    textTransform: "uppercase",
                                    mb: "20px",
                                    children: a(860, "Timeframe")
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsx)(ue.L, {
                                    fontSize: "12px",
                                    bold: !0,
                                    color: "textSubtle",
                                    textTransform: "uppercase",
                                    mb: "20px",
                                    children: a(858, "ROI")
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsx)(ue.L, {
                                    fontSize: "12px",
                                    bold: !0,
                                    color: "textSubtle",
                                    textTransform: "uppercase",
                                    mb: "20px",
                                    children: a(864, "CAKE per $1000")
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsx)(ue.L, {
                                    children: "1d"
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsxs)(ue.L, {
                                    children: [on({
                                        amountEarned: l,
                                        amountInvested: s
                                    }), "%"]
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsx)(ue.L, {
                                    children: l
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsx)(ue.L, {
                                    children: "7d"
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsxs)(ue.L, {
                                    children: [on({
                                        amountEarned: d,
                                        amountInvested: s
                                    }), "%"]
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsx)(ue.L, {
                                    children: d
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsx)(ue.L, {
                                    children: "30d"
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsxs)(ue.L, {
                                    children: [on({
                                        amountEarned: b,
                                        amountInvested: s
                                    }), "%"]
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsx)(ue.L, {
                                    children: b
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsx)(ue.L, {
                                    children: "365d(APY)"
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsxs)(ue.L, {
                                    children: [on({
                                        amountEarned: j,
                                        amountInvested: s
                                    }), "%"]
                                })
                            }), Object(Ce.jsx)(ln, {
                                children: Object(Ce.jsx)(ue.L, {
                                    children: j
                                })
                            })]
                        }), Object(Ce.jsx)(dn, {
                            fontSize: "12px",
                            color: "textSubtle",
                            children: a(866, "Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")
                        }), Object(Ce.jsx)(ue.s, {
                            justifyContent: "center",
                            children: Object(Ce.jsxs)(ue.z, {
                                href: c,
                                children: [a(999, "Get"), " ", t]
                            })
                        })]
                    })
                },
                jn = function(e) {
                    var n = e.lpLabel,
                        t = e.cakePrice,
                        r = e.apy,
                        i = e.addLiquidityUrl,
                        c = Object(ue.X)(Object(Ce.jsx)(bn, {
                            lpLabel: n,
                            cakePrice: t,
                            apy: r,
                            addLiquidityUrl: i
                        })),
                        a = Object(ie.a)(c, 1)[0];
                    return Object(Ce.jsx)(ue.v, {
                        onClick: function(e) {
                            e.stopPropagation(), a()
                        },
                        variant: "text",
                        scale: "sm",
                        ml: "4px",
                        children: Object(Ce.jsx)(ue.j, {
                            width: "18px"
                        })
                    })
                },
                un = Object(xe.f)(p || (p = Object(ce.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),
                xn = xe.e.div(O || (O = Object(ce.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: ", " 2s linear infinite;\n  border-radius: 32px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])), un),
                pn = xe.e.div(h || (h = Object(ce.a)(["\n  align-self: baseline;\n  background: ", ";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])), (function(e) {
                    return e.theme.card.background
                })),
                On = xe.e.div(m || (m = Object(ce.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])), (function(e) {
                    return e.theme.colors.borderColor
                })),
                hn = xe.e.div(f || (f = Object(ce.a)(["\n  height: ", ";\n  overflow: hidden;\n"])), (function(e) {
                    return e.expanded ? "100%" : "0px"
                })),
                mn = function(e) {
                    var n = e.farm,
                        t = e.removed,
                        r = e.cakePrice,
                        i = e.bnbPrice,
                        c = e.ethPrice,
                        a = e.account,
                        o = Object(ye.a)(),
                        s = Object(ae.useState)(!1),
                        l = Object(ie.a)(s, 2),
                        d = l[0],
                        b = l[1],
                        j = Se.a.includes(n.tokenSymbol),
                        u = n.lpSymbol.split(" ")[0].toLocaleLowerCase(),
                        x = Object(ae.useMemo)((function() {
                            return n.lpTotalInQuoteToken ? n.quoteTokenSymbol === ve.b.BNB ? i.times(n.lpTotalInQuoteToken) : n.quoteTokenSymbol === ve.b.CAKE ? r.times(n.lpTotalInQuoteToken) : n.quoteTokenSymbol === ve.b.ETH ? c.times(n.lpTotalInQuoteToken) : n.lpTotalInQuoteToken : null
                        }), [i, r, c, n.lpTotalInQuoteToken, n.quoteTokenSymbol]),
                        p = x ? "$".concat(Number(x).toLocaleString(void 0, {
                            maximumFractionDigits: 0
                        })) : "-",
                        O = n.lpSymbol && n.lpSymbol.toUpperCase().replace("PANCAKE", ""),
                        h = n.dual ? n.dual.earnLabel : "LOLI",
                        m = n.apy && n.apy.times(new be.a(100)).toNumber().toLocaleString("en-US", {
                            maximumFractionDigits: 2
                        }),
                        f = n.quoteTokenAdresses,
                        g = n.tokenAddresses,
                        v = Te({
                            quoteTokenAdresses: f,
                            tokenAddresses: g
                        }),
                        y = "".concat(pe.a, "/").concat(v);
                    return Object(Ce.jsxs)(pn, {
                        children: ["LOLI" === n.tokenSymbol && Object(Ce.jsx)(xn, {}), Object(Ce.jsx)(De, {
                            lpLabel: O,
                            multiplier: n.multiplier,
                            isCommunityFarm: j,
                            farmImage: u,
                            tokenSymbol: n.tokenSymbol
                        }), !t && Object(Ce.jsxs)(ue.s, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [Object(Ce.jsxs)(ue.L, {
                                children: [o(736, "APR"), ":"]
                            }), Object(Ce.jsx)(ue.L, {
                                bold: !0,
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: n.apy ? Object(Ce.jsxs)(Ce.Fragment, {
                                    children: [Object(Ce.jsx)(jn, {
                                        lpLabel: O,
                                        addLiquidityUrl: y,
                                        cakePrice: r,
                                        apy: n.apy
                                    }), m, "%"]
                                }) : Object(Ce.jsx)(ue.J, {
                                    height: 24,
                                    width: 80
                                })
                            })]
                        }), Object(Ce.jsxs)(ue.s, {
                            justifyContent: "space-between",
                            children: [Object(Ce.jsxs)(ue.L, {
                                children: [o(318, "Earn"), ":"]
                            }), Object(Ce.jsx)(ue.L, {
                                bold: !0,
                                children: h
                            })]
                        }), Object(Ce.jsx)(cn, {
                            farm: n,
                            account: a,
                            addLiquidityUrl: y
                        }), Object(Ce.jsx)(On, {}), Object(Ce.jsx)(Le.a, {
                            onClick: function() {
                                return b(!d)
                            },
                            expanded: d
                        }), Object(Ce.jsx)(hn, {
                            expanded: d,
                            children: Object(Ce.jsx)(Ie, {
                                removed: t,
                                bscScanAddress: "https://bscscan.com/address/".concat(n.lpAddresses[56]),
                                totalValueFormated: p,
                                lpLabel: O,
                                addLiquidityUrl: y
                            })
                        })]
                    })
                },
                fn = xe.e.div(g || (g = Object(ce.a)(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n\n  button {\n    width: 20px;\n    height: 20px;\n\n    svg {\n      path {\n        fill: ", ";\n      }\n    }\n  }\n"])), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                gn = xe.e.div(v || (v = Object(ce.a)(["\n  min-width: 60px;\n  text-align: left;\n"]))),
                vn = function(e) {
                    var n = e.value,
                        t = e.lpLabel,
                        r = e.quoteTokenAdresses,
                        i = e.tokenAddresses,
                        c = e.cakePrice,
                        a = e.originalValue,
                        o = e.hideButton,
                        s = void 0 !== o && o,
                        l = Object(ye.a)(),
                        d = Te({
                            quoteTokenAdresses: r,
                            tokenAddresses: i
                        }),
                        b = "".concat(pe.a, "/").concat(d);
                    return Object(Ce.jsx)(fn, {
                        children: a ? Object(Ce.jsxs)(Ce.Fragment, {
                            children: [Object(Ce.jsxs)(gn, {
                                children: [n, "%"]
                            }), !s && Object(Ce.jsx)(jn, {
                                lpLabel: t,
                                cakePrice: c,
                                apy: a,
                                addLiquidityUrl: b
                            })]
                        }) : Object(Ce.jsx)(gn, {
                            children: l(656, "Loading...")
                        })
                    })
                },
                yn = Object(xe.e)(ue.w)(y || (y = Object(ce.a)(["\n  width: 24px;\n  height: 24px;\n\n  ", " {\n    width: 40px;\n    height: 40px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                kn = xe.e.div(k || (k = Object(ce.a)(["\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n\n  ", " {\n    padding-left: 32px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                wn = function(e) {
                    var n = e.image,
                        t = e.label,
                        r = e.pid,
                        i = Object(me.c)(r).stakedBalance,
                        c = Object(ye.a)(),
                        a = Object(ke.a)(i);
                    return Object(Ce.jsxs)(kn, {
                        children: [Object(Ce.jsx)(yn, {
                            src: "/images/farms/".concat(n, ".svg"),
                            alt: "icon",
                            width: 40,
                            height: 40,
                            mr: "8px"
                        }), Object(Ce.jsxs)("div", {
                            children: [a ? Object(Ce.jsx)(ue.L, {
                                color: "secondary",
                                fontSize: "12px",
                                bold: !0,
                                children: c(999, "FARMING")
                            }) : null, Object(Ce.jsx)(ue.L, {
                                bold: !0,
                                children: t
                            })]
                        })]
                    })
                },
                Sn = xe.e.span(w || (w = Object(ce.a)(["\n  color: ", ";\n  display: flex;\n  align-items: center;\n"])), (function(e) {
                    var n = e.earned,
                        t = e.theme;
                    return n ? t.colors.text : t.colors.textDisabled
                })),
                Ln = function(e) {
                    var n = e.earnings,
                        t = Object(je.c)().account,
                        r = null !== n && t ? n.toLocaleString() : "?";
                    return Object(Ce.jsx)(Sn, {
                        earned: n,
                        children: r
                    })
                },
                Tn = xe.e.div(S || (S = Object(ce.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  padding-right: 8px;\n  color: ", ";\n\n  ", " {\n    padding-right: 0px;\n  }\n"])), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                Cn = Object(xe.e)(ue.o)(L || (L = Object(ce.a)(["\n  transform: ", ";\n  height: 20px;\n"])), (function(e) {
                    return e.toggled ? "rotate(180deg)" : "rotate(0)"
                })),
                An = function(e) {
                    var n = e.actionPanelToggled,
                        t = !Object(ue.W)().isXl;
                    return Object(Ce.jsxs)(Tn, {
                        children: [!t && "Details", Object(Ce.jsx)(Cn, {
                            color: "primary",
                            toggled: n
                        })]
                    })
                },
                qn = xe.e.div(T || (T = Object(ce.a)(["\n  background: ", ";\n  padding: 16px;\n  border-radius: 16px;\n  color: ", ";\n  width: max-content;\n  display: none;\n  padding: 16px;\n  max-height: 500px;\n  z-index: ", ";\n  position: absolute;\n  bottom: calc(100% + 16px);\n  transform: translate(34px, 0);\n  right: 0;\n  max-width: 246px;\n\n  &:after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-top: 10px solid ", ";\n    bottom: 0;\n    position: absolute;\n    transform: translate(-34px, 9px);\n    right: 0;\n  }\n"])), (function(e) {
                    return e.theme.tooltip.background
                }), (function(e) {
                    return e.theme.tooltip.text
                }), (function(e) {
                    return e.theme.zIndices.modal
                }), (function(e) {
                    return e.theme.tooltip.background
                })),
                In = xe.e.div(C || (C = Object(ce.a)(["\n  position: relative;\n\n  &:hover ", ", &:focus-within ", " {\n    display: block;\n  }\n"])), qn, qn),
                Pn = function(e) {
                    var n = e.content,
                        t = e.children;
                    return Object(Ce.jsxs)(In, {
                        children: [t, Object(Ce.jsx)(qn, {
                            children: n
                        })]
                    })
                },
                Qn = xe.e.div(A || (A = Object(ce.a)(["\n  color: ", ";\n  width: 36px;\n  text-align: right;\n\n  ", " {\n    text-align: left;\n  }\n"])), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                En = xe.e.div(q || (q = Object(ce.a)(["\n  display: flex;\n  align-items: center;\n\n  svg {\n    margin-left: 14px;\n  }\n\n  ", " {\n    svg {\n      margin-left: 0;\n    }\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                Dn = function(e) {
                    var n = e.multiplier,
                        t = n ? n.toLowerCase() : "-",
                        r = Object(ye.a)();
                    return Object(Ce.jsxs)(En, {
                        children: [Object(Ce.jsx)(Qn, {
                            children: t
                        }), Object(Ce.jsx)(Pn, {
                            content: Object(Ce.jsxs)("div", {
                                children: [r(999, "The multiplier represents the amount of token rewards each farm gets."), Object(Ce.jsx)("br", {}), Object(Ce.jsx)("br", {}), r(999, "For example, if a 1x farm was getting 1 token per block, a 40x farm would be getting 40 tokens per block.")]
                            }),
                            children: Object(Ce.jsx)(ue.u, {
                                color: "textSubtle"
                            })
                        })]
                    })
                },
                zn = xe.e.div(I || (I = Object(ce.a)(["\n  min-width: 110px;\n  font-weight: 600;\n  text-align: right;\n\n  ", " {\n    text-align: left;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                Bn = xe.e.div(P || (P = Object(ce.a)(["\n  display: flex;\n  align-items: center;\n\n  svg {\n    margin-left: 14px;\n  }\n\n  ", " {\n    svg {\n      margin-left: 0;\n    }\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                Un = function(e) {
                    var n = e.liquidity,
                        t = n ? "$".concat(Number(n).toLocaleString(void 0, {
                            maximumFractionDigits: 0
                        })) : "-",
                        r = Object(ye.a)();
                    return Object(Ce.jsxs)(Bn, {
                        children: [Object(Ce.jsx)(zn, {
                            children: Object(Ce.jsx)(ue.L, {
                                children: t
                            })
                        }), Object(Ce.jsx)(Pn, {
                            content: r(999, "The total value of the funds in this farm\u2019s liquidity pool"),
                            children: Object(Ce.jsx)(ue.u, {
                                color: "textSubtle"
                            })
                        })]
                    })
                },
                Nn = t(257),
                Rn = xe.e.div(Q || (Q = Object(ce.a)(["\n  padding: 16px;\n  border: 2px solid ", ";\n  border-radius: 16px;\n  flex-grow: 1;\n  flex-basis: 0;\n  margin-bottom: 16px;\n\n  ", " {\n    margin-left: 12px;\n    margin-right: 12px;\n    margin-bottom: 0;\n    max-height: 100px;\n  }\n\n  ", " {\n    margin-left: 48px;\n    margin-right: 0;\n    margin-bottom: 0;\n    max-height: 100px;\n  }\n"])), (function(e) {
                    return e.theme.colors.input
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.xl
                })),
                Fn = xe.e.div(E || (E = Object(ce.a)(["\n  font-weight: 600;\n  font-size: 12px;\n  margin-bottom: 8px;\n"]))),
                Mn = xe.e.span(D || (D = Object(ce.a)(["\n  color: ", ";\n"])), (function(e) {
                    return e.theme.colors.secondary
                })),
                Hn = xe.e.span(z || (z = Object(ce.a)(["\n  color: ", ";\n"])), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                Kn = xe.e.div(B || (B = Object(ce.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),
                Vn = xe.e.div(U || (U = Object(ce.a)(["\n  font-weight: 600;\n  font-size: 20px;\n  color: ", ";\n"])), (function(e) {
                    return e.theme.colors.text
                })),
                Xn = xe.e.div(N || (N = Object(ce.a)(["\n  font-size: 12px;\n  color: ", ";\n"])), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                Gn = function(e) {
                    var n = e.pid,
                        t = e.userData,
                        r = Object(je.c)().account,
                        i = t && r ? new be.a(t.earnings) : null,
                        c = Object(me.k)(),
                        a = null,
                        o = 0,
                        s = "?";
                    i && (a = Object(ke.a)(i), o = new be.a(a).multipliedBy(c).toNumber(), s = a.toLocaleString());
                    var l = Object(ae.useState)(!1),
                        d = Object(ie.a)(l, 2),
                        b = d[0],
                        j = d[1],
                        u = Object(nn.b)(n).onReward,
                        x = Object(ye.a)(),
                        p = Object(Nn.useCountUp)({
                            start: 0,
                            end: o,
                            duration: 1,
                            separator: ",",
                            decimals: 3
                        }),
                        O = p.countUp,
                        h = p.update,
                        m = Object(ae.useRef)(h);
                    return Object(ae.useEffect)((function() {
                        m.current(o)
                    }), [o, m]), Object(Ce.jsxs)(Rn, {
                        children: [Object(Ce.jsxs)(Fn, {
                            children: [Object(Ce.jsx)(Mn, {
                                children: "LOLI"
                            }), Object(Ce.jsx)(Hn, {
                                children: "EARNED"
                            })]
                        }), Object(Ce.jsxs)(Kn, {
                            children: [Object(Ce.jsxs)("div", {
                                children: [Object(Ce.jsx)(Vn, {
                                    children: s
                                }), Object(Ce.jsxs)(Xn, {
                                    children: ["~", O, "USD"]
                                })]
                            }), Object(Ce.jsx)(ue.g, {
                                disabled: !a || b || !r,
                                onClick: Object(Ue.a)(Be.a.mark((function e() {
                                    return Be.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return j(!0), e.next = 3, u();
                                            case 3:
                                                j(!1);
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                ml: "4px",
                                children: x(999, "Harvest")
                            })]
                        })]
                    })
                },
                Wn = xe.e.div(R || (R = Object(ce.a)(["\n  display: flex;\n"]))),
                Yn = function(e) {
                    var n = e.pid,
                        t = e.lpSymbol,
                        r = e.lpAddresses,
                        i = e.quoteTokenAdresses,
                        c = e.tokenAddresses,
                        a = Object(ye.a)(),
                        o = Object(je.c)().account,
                        s = Object(ae.useState)(!1),
                        l = Object(ie.a)(s, 2),
                        d = l[0],
                        b = l[1],
                        j = Object(me.c)(n),
                        u = j.allowance,
                        x = j.tokenBalance,
                        p = j.stakedBalance,
                        O = Object(Ke.a)(n).onStake,
                        h = Object(Ve.a)(n).onUnstake,
                        m = Object(Fe.a)(),
                        f = o && u && u.isGreaterThan(0),
                        g = r[56],
                        v = Te({
                            quoteTokenAdresses: i,
                            tokenAddresses: c
                        }),
                        y = "".concat(pe.a, "/").concat(v),
                        k = Object(ke.a)(p),
                        w = k.toLocaleString(),
                        S = Object(ue.X)(Object(Ce.jsx)($e, {
                            max: x,
                            onConfirm: O,
                            tokenName: t,
                            addLiquidityUrl: y
                        })),
                        L = Object(ie.a)(S, 1)[0],
                        T = Object(ue.X)(Object(Ce.jsx)(Ze, {
                            max: p,
                            onConfirm: h,
                            tokenName: t
                        })),
                        C = Object(ie.a)(T, 1)[0],
                        A = Object(Re.a)(g, m),
                        q = Object(Me.a)(A).onApprove,
                        I = Object(ae.useCallback)(Object(Ue.a)(Be.a.mark((function e() {
                            return Be.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, b(!0), e.next = 4, q();
                                    case 4:
                                        b(!1), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error(e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))), [q]);
                    return o ? f ? k ? Object(Ce.jsxs)(Rn, {
                        children: [Object(Ce.jsxs)(Fn, {
                            children: [Object(Ce.jsxs)(Mn, {
                                children: [t, " "]
                            }), Object(Ce.jsx)(Hn, {
                                children: a(999, "STAKED")
                            })]
                        }), Object(Ce.jsxs)(Kn, {
                            children: [Object(Ce.jsx)("div", {
                                children: Object(Ce.jsx)(Vn, {
                                    children: w
                                })
                            }), Object(Ce.jsxs)(Wn, {
                                children: [Object(Ce.jsx)(ue.v, {
                                    variant: "secondary",
                                    onClick: C,
                                    mr: "6px",
                                    children: Object(Ce.jsx)(ue.D, {
                                        color: "primary",
                                        width: "14px"
                                    })
                                }), Object(Ce.jsx)(ue.v, {
                                    variant: "secondary",
                                    onClick: L,
                                    children: Object(Ce.jsx)(ue.a, {
                                        color: "primary",
                                        width: "14px"
                                    })
                                })]
                            })]
                        })]
                    }) : Object(Ce.jsxs)(Rn, {
                        children: [Object(Ce.jsxs)(Fn, {
                            children: [Object(Ce.jsxs)(Hn, {
                                children: [a(999, "STAKE"), " "]
                            }), Object(Ce.jsx)(Mn, {
                                children: t
                            })]
                        }), Object(Ce.jsx)(Kn, {
                            children: Object(Ce.jsx)(ue.g, {
                                width: "100%",
                                onClick: L,
                                variant: "secondary",
                                children: a(999, "Stake LP")
                            })
                        })]
                    }) : Object(Ce.jsxs)(Rn, {
                        children: [Object(Ce.jsx)(Fn, {
                            children: Object(Ce.jsx)(Hn, {
                                children: a(999, "ENABLE FARM")
                            })
                        }), Object(Ce.jsx)(Kn, {
                            children: Object(Ce.jsx)(ue.g, {
                                width: "100%",
                                disabled: d,
                                onClick: I,
                                variant: "secondary",
                                children: a(999, "Enable")
                            })
                        })]
                    }) : Object(Ce.jsxs)(Rn, {
                        children: [Object(Ce.jsx)(Fn, {
                            children: Object(Ce.jsx)(Hn, {
                                children: a(999, "START FARMING")
                            })
                        }), Object(Ce.jsx)(Kn, {
                            children: Object(Ce.jsx)(He.a, {
                                width: "100%"
                            })
                        })]
                    })
                },
                Jn = xe.e.div(F || (F = Object(ce.a)(["\n  background: ", ";\n  display: flex;\n  width: 100%;\n  flex-direction: column-reverse;\n  padding: 24px;\n\n  ", " {\n    flex-direction: row;\n    padding: 16px 32px;\n  }\n"])), (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                $n = Object(xe.e)(ue.z)(M || (M = Object(ce.a)(["\n  font-weight: 400;\n"]))),
                Zn = xe.e.div(H || (H = Object(ce.a)(["\n  color: ", ";\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n\n  ", " {\n    justify-content: flex-start;\n  }\n"])), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                _n = xe.e.div(K || (K = Object(ce.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n\n  ", " {\n    margin-top: 16px;\n  }\n\n  > div {\n    height: 24px;\n    padding: 0 6px;\n    font-size: 14px;\n    margin-right: 4px;\n\n    svg {\n      width: 14px;\n    }\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                et = xe.e.div(V || (V = Object(ce.a)(["\n  display: flex;\n  flex-direction: column;\n\n  ", " {\n    flex-direction: row;\n    align-items: center;\n    flex-grow: 1;\n    flex-basis: 0;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                nt = xe.e.div(X || (X = Object(ce.a)(["\n  min-width: 200px;\n"]))),
                tt = xe.e.div(G || (G = Object(ce.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                rt = xe.e.div(W || (W = Object(ce.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 4px 0px;\n"]))),
                it = function(e) {
                    var n = e.details,
                        t = e.apr,
                        r = e.multiplier,
                        i = e.liquidity,
                        c = n,
                        a = Object(ye.a)(),
                        o = c.quoteTokenAdresses,
                        s = c.tokenAddresses,
                        l = c.tokenSymbol,
                        d = c.dual,
                        b = c.lpSymbol && c.lpSymbol.toUpperCase().replace("PANCAKE", ""),
                        j = Te({
                            quoteTokenAdresses: o,
                            tokenAddresses: s
                        }),
                        u = c.lpAddresses[56],
                        x = "https://bscscan.com/address/".concat(u),
                        p = "https://pancakeswap.info/pair/".concat(u),
                        O = Se.a.includes(l);
                    return Object(Ce.jsxs)(Jn, {
                        children: [Object(Ce.jsxs)(nt, {
                            children: [Object(Ce.jsx)(Zn, {
                                children: Object(Ce.jsx)($n, {
                                    href: "https://dex.loliswap.org/#/add/".concat(j),
                                    children: a(999, "Get ".concat(b), {
                                        name: b
                                    })
                                })
                            }), Object(Ce.jsx)($n, {
                                href: x,
                                children: a(999, "View Contract")
                            }), Object(Ce.jsx)($n, {
                                href: p,
                                children: a(999, "See Pair Info")
                            }), Object(Ce.jsxs)(_n, {
                                children: [O ? Object(Ce.jsx)(Pe.b, {}) : Object(Ce.jsx)(Pe.c, {}), d ? Object(Ce.jsx)(Pe.d, {}) : null]
                            })]
                        }), Object(Ce.jsxs)(tt, {
                            children: [Object(Ce.jsxs)(rt, {
                                children: [Object(Ce.jsx)(ue.L, {
                                    children: a(736, "APR")
                                }), Object(Ce.jsx)(vn, Object(re.a)({}, t))]
                            }), Object(Ce.jsxs)(rt, {
                                children: [Object(Ce.jsx)(ue.L, {
                                    children: a(999, "Multiplier")
                                }), Object(Ce.jsx)(Dn, Object(re.a)({}, r))]
                            }), Object(Ce.jsxs)(rt, {
                                children: [Object(Ce.jsx)(ue.L, {
                                    children: a(999, "Liquidity")
                                }), Object(Ce.jsx)(Un, Object(re.a)({}, i))]
                            })]
                        }), Object(Ce.jsxs)(et, {
                            children: [Object(Ce.jsx)(Gn, Object(re.a)({}, c)), Object(Ce.jsx)(Yn, Object(re.a)({}, c))]
                        })]
                    })
                },
                ct = xe.e.div(Y || (Y = Object(ce.a)(["\n  font-size: 12px;\n  color: ", ";\n  text-align: left;\n"])), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                at = xe.e.div(J || (J = Object(ce.a)(["\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n"]))),
                ot = function(e) {
                    var n = e.label,
                        t = void 0 === n ? "" : n,
                        r = e.children;
                    return Object(Ce.jsxs)("div", {
                        children: [t && Object(Ce.jsx)(ct, {
                            children: t
                        }), Object(Ce.jsx)(at, {
                            children: r
                        })]
                    })
                },
                st = [{
                    id: 1,
                    name: "farm",
                    translationId: 999,
                    sortable: !0,
                    label: ""
                }, {
                    id: 2,
                    name: "earned",
                    translationId: 1072,
                    sortable: !0,
                    label: "Earned"
                }, {
                    id: 3,
                    name: "apr",
                    translationId: 736,
                    sortable: !0,
                    label: "APR"
                }, {
                    id: 6,
                    name: "details",
                    translationId: 999,
                    sortable: !0,
                    label: ""
                }],
                lt = [{
                    id: 1,
                    name: "farm",
                    translationId: 999,
                    sortable: !0,
                    label: ""
                }, {
                    id: 2,
                    name: "earned",
                    translationId: 1072,
                    sortable: !0,
                    label: "Earned"
                }, {
                    id: 3,
                    name: "apr",
                    translationId: 736,
                    sortable: !0,
                    label: "APR"
                }, {
                    id: 4,
                    name: "liquidity",
                    translationId: 999,
                    sortable: !0,
                    label: "Liquidity"
                }, {
                    id: 5,
                    name: "multiplier",
                    translationId: 999,
                    sortable: !0,
                    label: "Multiplier"
                }, {
                    id: 6,
                    name: "details",
                    translationId: 999,
                    sortable: !0,
                    label: ""
                }];
            ! function(e) {
                e.TABLE = "TABLE", e.CARD = "CARD"
            }($ || ($ = {}));
            var dt, bt, jt, ut, xt, pt, Ot, ht, mt, ft, gt, vt, yt, kt, wt, St, Lt, Tt, Ct, At, qt, It, Pt, Qt, Et = {
                    apr: vn,
                    farm: wn,
                    earned: Ln,
                    details: An,
                    multiplier: Dn,
                    liquidity: Un
                },
                Dt = xe.e.div(Z || (Z = Object(ce.a)(["\n  padding: 24px 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding-right: 8px;\n\n  ", " {\n    padding-right: 32px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.xl
                })),
                zt = xe.e.tr(_ || (_ = Object(ce.a)(["\n  cursor: pointer;\n  border-bottom: 2px solid ", ";\n"])), (function(e) {
                    return e.theme.colors.borderColor
                })),
                Bt = xe.e.td(ee || (ee = Object(ce.a)(["\n  padding: 16px 0 24px 16px;\n"]))),
                Ut = xe.e.td(ne || (ne = Object(ce.a)(["\n  padding-top: 16px;\n  padding-bottom: 24px;\n"]))),
                Nt = xe.e.td(te || (te = Object(ce.a)(["\n  padding-top: 24px;\n"]))),
                Rt = function(e) {
                    var n = e.details,
                        t = Object(ae.useState)(!1),
                        r = Object(ie.a)(t, 2),
                        i = r[0],
                        c = r[1],
                        a = Object(ye.a)(),
                        o = function() {
                            c(!i)
                        },
                        s = Object(ue.W)(),
                        l = s.isXl,
                        d = s.isXs,
                        b = !l,
                        j = b ? st : lt,
                        u = j.map((function(e) {
                            return e.name
                        }));
                    return Object(Ce.jsxs)(Ce.Fragment, {
                        children: [d ? Object(Ce.jsxs)(zt, {
                            onClick: o,
                            children: [Object(Ce.jsxs)("td", {
                                children: [Object(Ce.jsx)("tr", {
                                    children: Object(Ce.jsx)(Nt, {
                                        children: Object(Ce.jsx)(ot, {
                                            children: Object(Ce.jsx)(wn, Object(re.a)({}, e.farm))
                                        })
                                    })
                                }), Object(Ce.jsxs)("tr", {
                                    children: [Object(Ce.jsx)(Bt, {
                                        children: Object(Ce.jsx)(ot, {
                                            label: a(1072, "Earned"),
                                            children: Object(Ce.jsx)(Ln, Object(re.a)({}, e.earned))
                                        })
                                    }), Object(Ce.jsx)(Ut, {
                                        children: Object(Ce.jsx)(ot, {
                                            label: a(736, "APR"),
                                            children: Object(Ce.jsx)(vn, Object(re.a)(Object(re.a)({}, e.apr), {}, {
                                                hideButton: !0
                                            }))
                                        })
                                    })]
                                })]
                            }), Object(Ce.jsx)("td", {
                                children: Object(Ce.jsx)(Dt, {
                                    children: Object(Ce.jsx)(ot, {
                                        children: Object(Ce.jsx)(An, {
                                            actionPanelToggled: i
                                        })
                                    })
                                })
                            })]
                        }) : Object(Ce.jsx)(zt, {
                            onClick: o,
                            children: Object.keys(e).map((function(n) {
                                var t = u.indexOf(n);
                                if (-1 === t) return null;
                                switch (n) {
                                    case "details":
                                        return Object(Ce.jsx)("td", {
                                            children: Object(Ce.jsx)(Dt, {
                                                children: Object(Ce.jsx)(ot, {
                                                    children: Object(Ce.jsx)(An, {
                                                        actionPanelToggled: i
                                                    })
                                                })
                                            })
                                        }, n);
                                    case "apr":
                                        return Object(Ce.jsx)("td", {
                                            children: Object(Ce.jsx)(Dt, {
                                                children: Object(Ce.jsx)(ot, {
                                                    label: a(736, "APR"),
                                                    children: Object(Ce.jsx)(vn, Object(re.a)(Object(re.a)({}, e.apr), {}, {
                                                        hideButton: b
                                                    }))
                                                })
                                            })
                                        }, n);
                                    default:
                                        return Object(Ce.jsx)("td", {
                                            children: Object(Ce.jsx)(Dt, {
                                                children: Object(Ce.jsx)(ot, {
                                                    label: a(j[t].translationId, j[t].label),
                                                    children: oe.a.createElement(Et[n], e[n])
                                                })
                                            })
                                        }, n)
                                }
                            }))
                        }), i && n && Object(Ce.jsx)("tr", {
                            children: Object(Ce.jsx)("td", {
                                colSpan: 6,
                                children: Object(Ce.jsx)(it, Object(re.a)({}, e))
                            })
                        })]
                    })
                },
                Ft = xe.e.div(dt || (dt = Object(ce.a)(["\n  filter: ", ";\n  width: 100%;\n  background: ", ";\n  border-radius: 16px;\n  margin: 16px 0px;\n"])), (function(e) {
                    return e.theme.card.dropShadow
                }), (function(e) {
                    return e.theme.card.background
                })),
                Mt = xe.e.div(bt || (bt = Object(ce.a)(["\n  overflow: visible;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),
                Ht = xe.e.table(jt || (jt = Object(ce.a)(["\n  border-collapse: collapse;\n  font-size: 14px;\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n"]))),
                Kt = xe.e.tbody(ut || (ut = Object(ce.a)(["\n  & tr {\n    td {\n      font-size: 16px;\n      vertical-align: middle;\n    }\n  }\n"]))),
                Vt = xe.e.div(xt || (xt = Object(ce.a)(["\n  position: relative;\n}\n"]))),
                Xt = xe.e.div(pt || (pt = Object(ce.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]))),
                Gt = function(e) {
                    var n = Object(ae.useRef)(null),
                        t = Object(ye.a)(),
                        r = e.data,
                        i = e.columns,
                        c = Object(ue.Y)(i, r, {
                            sortable: !0,
                            sortColumn: "farm"
                        }).rows;
                    return Object(Ce.jsx)(Ft, {
                        children: Object(Ce.jsxs)(Vt, {
                            children: [Object(Ce.jsx)(Mt, {
                                ref: n,
                                children: Object(Ce.jsx)(Ht, {
                                    children: Object(Ce.jsx)(Kt, {
                                        children: c.map((function(e) {
                                            return Object(ae.createElement)(Rt, Object(re.a)(Object(re.a)({}, e.original), {}, {
                                                key: "table-row-".concat(e.id)
                                            }))
                                        }))
                                    })
                                })
                            }), Object(Ce.jsx)(Xt, {
                                children: Object(Ce.jsxs)(ue.g, {
                                    variant: "text",
                                    onClick: function() {
                                        n.current.scrollIntoView({
                                            behavior: "smooth"
                                        })
                                    },
                                    children: [t(999, "To Top"), Object(Ce.jsx)(ue.p, {
                                        color: "primary"
                                    })]
                                })
                            })]
                        })
                    })
                },
                Wt = t(85),
                Yt = function() {
                    var e = Object(se.h)(),
                        n = e.url,
                        t = e.isExact,
                        r = Object(ye.a)();
                    return Object(Ce.jsx)(Jt, {
                        children: Object(Ce.jsxs)(ue.h, {
                            activeIndex: t ? 0 : 1,
                            scale: "sm",
                            variant: "subtle",
                            children: [Object(Ce.jsx)(ue.i, {
                                as: Wt.a,
                                to: "".concat(n),
                                children: r(1198, "Live")
                            }), Object(Ce.jsx)(ue.i, {
                                as: Wt.a,
                                to: "".concat(n, "/history"),
                                children: r(388, "Finished")
                            })]
                        })
                    })
                },
                Jt = xe.e.div(Ot || (Ot = Object(ce.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n\n  ", " {\n    margin-left: 16px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                $t = Object(xe.e)(ue.x)(ht || (ht = Object(ce.a)(["\n  border-radius: 16px;\n  margin-left: auto;\n"]))),
                Zt = xe.e.div(mt || (mt = Object(ce.a)(["\n  position: relative;\n  ", " {\n    width: 234px;\n    display: block;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                _t = xe.e.div(ft || (ft = Object(ce.a)([""]))),
                er = function(e) {
                    var n = e.value,
                        t = e.onChange,
                        r = Object(ae.useState)(!1),
                        i = Object(ie.a)(r, 2),
                        c = i[0],
                        a = i[1],
                        o = Object(ae.useRef)(null);
                    return Object(Ce.jsx)(_t, {
                        toggled: c,
                        children: Object(Ce.jsx)(Zt, {
                            children: Object(Ce.jsx)($t, {
                                ref: o,
                                value: n,
                                onChange: t,
                                placeholder: "Search farms",
                                onBlur: function() {
                                    return a(!1)
                                }
                            })
                        })
                    })
                },
                nr = xe.e.div(gt || (gt = Object(ce.a)(["\n  margin-left: -8px;\n\n  ", " {\n    margin-left: 0;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                tr = function(e) {
                    var n = e.viewMode,
                        t = e.onToggle,
                        r = function(e) {
                            n !== e && t(e)
                        };
                    return Object(Ce.jsxs)(nr, {
                        children: [Object(Ce.jsx)(ue.v, {
                            variant: "text",
                            scale: "sm",
                            onClick: function() {
                                return r($.CARD)
                            },
                            children: Object(Ce.jsx)(ue.n, {
                                color: n === $.CARD ? "primary" : "textDisabled"
                            })
                        }), Object(Ce.jsx)(ue.v, {
                            variant: "text",
                            scale: "sm",
                            onClick: function() {
                                return r($.TABLE)
                            },
                            children: Object(Ce.jsx)(ue.A, {
                                color: n === $.TABLE ? "primary" : "textDisabled"
                            })
                        })]
                    })
                },
                rr = xe.e.div(vt || (vt = Object(ce.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n  box-shadow: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  background: ", ";\n  transition: border-radius 0.15s;\n"])), (function(e) {
                    return e.theme.shadows.inset
                }), (function(e) {
                    return e.theme.colors.inputSecondary
                }), (function(e) {
                    return e.theme.colors.input
                })),
                ir = xe.e.div(yt || (yt = Object(ce.a)(["\n  min-width: 136px;\n  height: 0;\n  position: absolute;\n  overflow: hidden;\n  background: ", ";\n  z-index: ", ";\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  opacity: 0;\n\n  ", " {\n    min-width: 168px;\n  }\n"])), (function(e) {
                    return e.theme.colors.input
                }), (function(e) {
                    return e.theme.zIndices.dropdown
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                cr = xe.e.div(kt || (kt = Object(ce.a)(["\n  cursor: pointer;\n  width: ", "px;\n  position: relative;\n  background: ", ";\n  border-radius: 16px;\n  height: 40px;\n  min-width: 136px;\n\n  ", " {\n    min-width: 168px;\n  }\n\n  ", "\n\n  svg {\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"])), (function(e) {
                    return e.width
                }), (function(e) {
                    return e.theme.colors.input
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.isOpen && Object(xe.d)(wt || (wt = Object(ce.a)(["\n      ", " {\n        border-bottom: 1px solid ", ";\n        box-shadow: ", ";\n        border-radius: 16px 16px 0 0;\n      }\n\n      ", " {\n        height: auto;\n        transform: scaleY(1);\n        opacity: 1;\n        border: 1px solid ", ";\n        border-top-width: 0;\n        border-radius: 0 0 16px 16px;\n        box-shadow: ", ";\n      }\n    "])), rr, (function(e) {
                        return e.theme.colors.inputSecondary
                    }), (function(e) {
                        return e.theme.tooltip.boxShadow
                    }), ir, (function(e) {
                        return e.theme.colors.inputSecondary
                    }), (function(e) {
                        return e.theme.tooltip.boxShadow
                    }))
                })),
                ar = xe.e.ul(St || (St = Object(ce.a)(["\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  z-index: ", ";\n"])), (function(e) {
                    return e.theme.zIndices.dropdown
                })),
                or = xe.e.li(Lt || (Lt = Object(ce.a)(["\n  list-style: none;\n  padding: 8px 16px;\n  &:hover {\n    background: ", ";\n  }\n"])), (function(e) {
                    return e.theme.colors.inputSecondary
                })),
                sr = function(e) {
                    var n = e.options,
                        t = e.onChange,
                        r = Object(ae.useRef)(null),
                        i = Object(ae.useRef)(null),
                        c = Object(ae.useState)(!1),
                        a = Object(ie.a)(c, 2),
                        o = a[0],
                        s = a[1],
                        l = Object(ae.useState)(n[0]),
                        d = Object(ie.a)(l, 2),
                        b = d[0],
                        j = d[1],
                        u = Object(ae.useState)({
                            width: 0,
                            height: 0
                        }),
                        x = Object(ie.a)(u, 2),
                        p = x[0],
                        O = x[1],
                        h = function() {
                            return s(!o)
                        },
                        m = function(e) {
                            return function() {
                                j(e), s(!1), t && t(e)
                            }
                        };
                    return Object(ae.useEffect)((function() {
                        O({
                            width: i.current.offsetWidth,
                            height: i.current.offsetHeight
                        })
                    }), []), Object(Ce.jsxs)(cr, Object(re.a)(Object(re.a)({
                        isOpen: o,
                        ref: r
                    }, p), {}, {
                        children: [0 !== p.width && Object(Ce.jsx)(rr, {
                            onClick: h,
                            children: Object(Ce.jsx)(ue.L, {
                                children: b.label
                            })
                        }), Object(Ce.jsx)(ue.b, {
                            color: "text",
                            onClick: h
                        }), Object(Ce.jsx)(ir, {
                            children: Object(Ce.jsx)(ar, {
                                ref: i,
                                children: n.map((function(e) {
                                    return e.label !== b.label ? Object(Ce.jsx)(or, {
                                        onClick: m(e),
                                        children: Object(Ce.jsx)(ue.L, {
                                            children: e.label
                                        })
                                    }, e.label) : null
                                }))
                            })
                        })]
                    }))
                },
                lr = xe.e.div(Tt || (Tt = Object(ce.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n\n  ", " {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 32px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                dr = xe.e.div(Ct || (Ct = Object(ce.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  ", " {\n    margin-left: 8px;\n  }\n"])), ue.L),
                br = xe.e.div(At || (At = Object(ce.a)(["\n  > ", " {\n    font-size: 12px;\n  }\n"])), ue.L),
                jr = xe.e.div(qt || (qt = Object(ce.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n\n  ", " {\n    width: auto;\n    padding: 0;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                ur = xe.e.div(It || (It = Object(ce.a)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  ", " {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                xr = (Object(xe.e)(ue.w)(Pt || (Pt = Object(ce.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 58px;\n"]))), xe.e.div(Qt || (Qt = Object(ce.a)(["\n  padding: 32px 0px;\n  // background: ", ";\n\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"])), (function(e) {
                    return e.theme.colors.gradients.bubblegum
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                }))),
                pr = function() {
                    var e = Object(se.h)().path,
                        n = Object(se.g)().pathname,
                        t = Object(ye.a)(),
                        r = Object(me.d)(),
                        i = Object(me.k)(),
                        c = Object(me.j)(),
                        a = Object(ae.useState)(""),
                        o = Object(ie.a)(a, 2),
                        s = o[0],
                        l = o[1],
                        d = Object(ae.useState)($.TABLE),
                        b = Object(ie.a)(d, 2),
                        j = b[0],
                        u = b[1],
                        x = Object(me.l)(),
                        p = Object(je.c)().account,
                        O = Object(ae.useState)("hot"),
                        h = Object(ie.a)(O, 2),
                        m = h[0],
                        f = h[1],
                        g = Object(le.b)(),
                        v = Object(fe.a)().fastRefresh;
                    Object(ae.useEffect)((function() {
                        p && g(Object(ge.b)(p))
                    }), [p, g, v]);
                    var y = Object(ae.useState)(!1),
                        k = Object(ie.a)(y, 2),
                        w = k[0],
                        S = k[1],
                        L = r.filter((function(e) {
                            return 0 !== e.pid && "0X" !== e.multiplier
                        })),
                        T = r.filter((function(e) {
                            return 0 !== e.pid && "0X" === e.multiplier
                        })),
                        C = L.filter((function(e) {
                            return e.userData && new be.a(e.userData.stakedBalance).isGreaterThan(0)
                        })),
                        A = Object(ae.useCallback)((function(e) {
                            var n, t = new be.a((null === (n = r.find((function(e) {
                                    return e.pid === pe.e
                                }))) || void 0 === n ? void 0 : n.tokenPriceVsQuote) || 0),
                                a = e.map((function(e) {
                                    if (!e.tokenAmount || !e.lpTotalInQuoteToken) return e;
                                    var n = pe.d.times(e.poolWeight),
                                        r = n.times(pe.c),
                                        a = t.times(r).div(e.lpTotalInQuoteToken);
                                    if (e.quoteTokenSymbol === ve.b.BUSD || e.quoteTokenSymbol === ve.b.UST) a = t.times(r).div(e.lpTotalInQuoteToken).times(c);
                                    else if (e.quoteTokenSymbol === ve.b.ETH) a = i.div(x).times(r).div(e.lpTotalInQuoteToken);
                                    else if (e.quoteTokenSymbol === ve.b.CAKE) a = r.div(e.lpTotalInQuoteToken);
                                    else if (e.dual) {
                                        var o = e && t.times(n).times(pe.c).div(e.lpTotalInQuoteToken),
                                            s = e.tokenPriceVsQuote && new be.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(pe.c).div(e.lpTotalInQuoteToken);
                                        a = o && s && o.plus(s)
                                    }
                                    var l = e.lpTotalInQuoteToken;
                                    return e.lpTotalInQuoteToken || (l = null), e.quoteTokenSymbol === ve.b.BNB && (l = c.times(e.lpTotalInQuoteToken)), e.quoteTokenSymbol === ve.b.CAKE && (l = i.times(e.lpTotalInQuoteToken)), e.quoteTokenSymbol === ve.b.ETH && (l = x.times(e.lpTotalInQuoteToken)), Object(re.a)(Object(re.a)({}, e), {}, {
                                        apy: a,
                                        liquidity: l
                                    })
                                }));
                            if (s) {
                                var o = s.toLowerCase();
                                a = a.filter((function(e) {
                                    return !!e.lpSymbol.toLowerCase().includes(o)
                                }))
                            }
                            return a
                        }), [c, r, s, i, x]),
                        q = !n.includes("history"),
                        I = [],
                        P = (I = function(e) {
                            switch (m) {
                                case "apr":
                                    return Object(we.orderBy)(e, "apy", "desc");
                                case "multiplier":
                                    return Object(we.orderBy)(e, (function(e) {
                                        return Number(e.multiplier.slice(0, -1))
                                    }), "desc");
                                case "earned":
                                    return Object(we.orderBy)(e, (function(e) {
                                        return e.userData ? e.userData.earnings : 0
                                    }), "desc");
                                case "liquidity":
                                    return Object(we.orderBy)(e, (function(e) {
                                        return Number(e.liquidity)
                                    }), "desc");
                                default:
                                    return e
                            }
                        }(I = A(q ? w ? C : L : T))).map((function(e) {
                            var n = e.quoteTokenAdresses,
                                t = e.quoteTokenSymbol,
                                r = e.tokenAddresses,
                                c = e.lpSymbol && e.lpSymbol.split(" ")[0].toUpperCase().replace("PANCAKE", "");
                            return {
                                apr: {
                                    value: e.apy && e.apy.times(new be.a(100)).toNumber().toLocaleString("en-US", {
                                        maximumFractionDigits: 2
                                    }),
                                    multiplier: e.multiplier,
                                    lpLabel: c,
                                    quoteTokenAdresses: n,
                                    quoteTokenSymbol: t,
                                    tokenAddresses: r,
                                    cakePrice: i,
                                    originalValue: e.apy
                                },
                                farm: {
                                    image: e.lpSymbol.split(" ")[0].toLocaleLowerCase(),
                                    label: c,
                                    pid: e.pid
                                },
                                earned: {
                                    earnings: e.userData ? Object(ke.a)(new be.a(e.userData.earnings)) : null,
                                    pid: e.pid
                                },
                                liquidity: {
                                    liquidity: e.liquidity
                                },
                                multiplier: {
                                    multiplier: e.multiplier
                                },
                                details: e
                            }
                        }));
                    return Object(Ce.jsxs)(Ce.Fragment, {
                        children: [Object(Ce.jsxs)(xr, {
                            children: [Object(Ce.jsx)(ue.t, {
                                as: "h1",
                                size: "xxl",
                                color: "secondary",
                                mb: "24px",
                                children: t(999, "Farms")
                            }), Object(Ce.jsx)(ue.t, {
                                size: "lg",
                                color: "text",
                                children: t(999, "Stake Liquidity Pool (LP) tokens to earn.")
                            })]
                        }), Object(Ce.jsxs)(he.a, {
                            children: [Object(Ce.jsxs)(lr, {
                                children: [Object(Ce.jsxs)(ur, {
                                    children: [Object(Ce.jsx)(tr, {
                                        viewMode: j,
                                        onToggle: function(e) {
                                            return u(e)
                                        }
                                    }), Object(Ce.jsxs)(dr, {
                                        children: [Object(Ce.jsx)(ue.P, {
                                            checked: w,
                                            onChange: function() {
                                                return S(!w)
                                            },
                                            scale: "sm"
                                        }), Object(Ce.jsxs)(ue.L, {
                                            children: [" ", t(1116, "Staked only")]
                                        })]
                                    }), Object(Ce.jsx)(Yt, {})]
                                }), Object(Ce.jsxs)(jr, {
                                    children: [Object(Ce.jsxs)(br, {
                                        children: [Object(Ce.jsx)(ue.L, {
                                            children: "SORT BY"
                                        }), Object(Ce.jsx)(sr, {
                                            options: [{
                                                label: "Hot",
                                                value: "hot"
                                            }, {
                                                label: "APR",
                                                value: "apr"
                                            }, {
                                                label: "Multiplier",
                                                value: "multiplier"
                                            }, {
                                                label: "Earned",
                                                value: "earned"
                                            }, {
                                                label: "Liquidity",
                                                value: "liquidity"
                                            }],
                                            onChange: function(e) {
                                                f(e.value)
                                            }
                                        })]
                                    }), Object(Ce.jsxs)(br, {
                                        style: {
                                            marginLeft: 16
                                        },
                                        children: [Object(Ce.jsx)(ue.L, {
                                            children: "SEARCH"
                                        }), Object(Ce.jsx)(er, {
                                            onChange: function(e) {
                                                l(e.target.value)
                                            },
                                            value: s
                                        })]
                                    })]
                                })]
                            }), function() {
                                if (j === $.TABLE && P.length) {
                                    var n = lt.map((function(e) {
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            label: e.label,
                                            sort: function(n, t) {
                                                switch (e.name) {
                                                    case "farm":
                                                        return t.id - n.id;
                                                    case "apr":
                                                        return n.original.apr.value && t.original.apr.value ? Number(n.original.apr.value) - Number(t.original.apr.value) : 0;
                                                    case "earned":
                                                        return n.original.earned.earnings - t.original.earned.earnings;
                                                    default:
                                                        return 1
                                                }
                                            },
                                            sortable: e.sortable
                                        }
                                    }));
                                    return Object(Ce.jsx)(Gt, {
                                        data: P,
                                        columns: n
                                    })
                                }
                                return Object(Ce.jsx)("div", {
                                    children: Object(Ce.jsxs)(Oe.a, {
                                        children: [Object(Ce.jsx)(se.b, {
                                            exact: !0,
                                            path: "".concat(e),
                                            children: I.map((function(e) {
                                                return Object(Ce.jsx)(mn, {
                                                    farm: e,
                                                    bnbPrice: c,
                                                    cakePrice: i,
                                                    ethPrice: x,
                                                    account: p,
                                                    removed: !1
                                                }, e.pid)
                                            }))
                                        }), Object(Ce.jsx)(se.b, {
                                            exact: !0,
                                            path: "".concat(e, "/history"),
                                            children: I.map((function(e) {
                                                return Object(Ce.jsx)(mn, {
                                                    farm: e,
                                                    bnbPrice: c,
                                                    cakePrice: i,
                                                    ethPrice: x,
                                                    account: p,
                                                    removed: !0
                                                }, e.pid)
                                            }))
                                        })]
                                    })
                                })
                            }()]
                        })]
                    })
                }
        },
        867: function(e, n, t) {
            "use strict";
            var r, i = t(18),
                c = (t(0), t(8)),
                a = t(12),
                o = t(5),
                s = c.e.div(r || (r = Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ", ";\n  }\n"])), (function(e) {
                    return e.theme.colors.primary
                })),
                l = function(e) {
                    var n = e.onClick,
                        t = e.expanded;
                    return Object(o.jsxs)(s, {
                        "aria-label": "Hide or show expandable content",
                        role: "button",
                        onClick: function() {
                            return n()
                        },
                        children: [Object(o.jsx)(a.L, {
                            color: "primary",
                            bold: !0,
                            children: t ? "Hide" : "Details"
                        }), t ? Object(o.jsx)(a.p, {}) : Object(o.jsx)(a.o, {})]
                    })
                };
            l.defaultProps = {
                expanded: !1
            }, n.a = l
        }
    }
]);
//# sourceMappingURL=6.6b840755.chunk.js.map
