# @n8n-dev/n8n-nodes-camelot-dex

![camelot-dex Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-camelot-dex.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-camelot-dex)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing camelot-dex API integrations by hand.**

Every time you connect n8n to camelot-dex, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to camelot-dex took 5 minutes, not half a day?**

This node gives you **24+ resources** out of the box: **Pools V 2**, **Pools V 3**, **Pools V 3 Ticks**, **Pools V 4**, **Deprecated Pools V 4**, and 19 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-camelot-dex
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-camelot-dex`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **camelot-dex API** → paste your API key
3. Drag the **camelot-dex** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Pools V 2 | GET Retrieve V2 liquidity pools data |
| Pools V 3 | GET Retrieve V3 liquidity pools data |
| Pools V 3 Ticks | GET Retrieve used ticks of a v3 pool, GET Retrieve used ticks of a v4 pool |
| Pools V 4 | GET Retrieve V4 liquidity pools data |
| Deprecated Pools V 4 | GET Retrieve deprecated V4 liquidity pools data |
| Deprecated Pools V 4 Ticks | GET Retrieve used ticks of a deprecated v4 pool |
| Tokens | GET Retrieve tokens data |
| Vaults | GET Retrieve vaults data |
| Campaigns | GET Retrieve campaigns data |
| Rewards | GET Retrieve rewards data |
| Points | GET Retrieve points data |
| Campaigns Health | GET Retrieve health data for campaigns |
| Metadata | GET Retrieve metadata from external source |
| Proofs | GET Retrieve proofs by type |
| Chains | GET Retrieve chains data |
| Health | GET Retrieve protocol health for one or all chains |
| Main Token | GET Retrieve Main Token data |
| Main Token Supply | GET Retrieve Main Token Supply data |
| X Token | GET Retrieve XToken data |
| Analytics | GET Retrieve analytics for every supported chain, GET Retrieve aggregated analytics for every supported chain, GET Retrieve analytics for the given chain |
| Analytics 24 H | GET Retrieve 24h analytics for every supported chain, GET Retrieve last 24h aggregated analytics for every supported chain, GET Retrieve last 24h analytics for the given chain |
| O Token | GET Retrieve OToken data, GET Retrieve OToken rate history data, GET Retrieve OToken conversions history data |
| Sales | GET Retrieve token sales data |
| Default | GET Get Pools V 2 History Tvl, GET Get Pools V 2 History Volume, GET Get Pools V 2 History Fees, GET Get Pools V 2 History Txs, GET Get Pools V 2 History Price, GET Get Pools V 3 History Tvl, GET Get Pools V 3 History Volume, GET Get Pools V 3 History Fees, GET Get Pools V 3 History Txs, GET Get Pools V 3 History Price, GET Get Pools V 4 History Tvl, GET Get Pools V 4 History Volume, GET Get Pools V 4 History Fees, GET Get Pools V 4 History Txs, GET Get Pools V 4 History Price |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from camelot-dex docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official camelot-dex OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **camelot-dex** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the camelot-dex API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
