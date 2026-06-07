import type { INodeProperties } from 'n8n-workflow';

export const poolsV3TicksDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pools V 3 Ticks"
					]
				}
			},
			"options": [
				{
					"name": "Get Pools V 3 Ticks",
					"value": "Get Pools V 3 Ticks",
					"action": "Retrieve used ticks of a v3 pool",
					"description": "Retrieve used ticks of a v3 pool",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v3/{{$parameter[\"address\"]}}/ticks"
						}
					}
				},
				{
					"name": "Get Pools V 4 Ticks",
					"value": "Get Pools V 4 Ticks",
					"action": "Retrieve used ticks of a v4 pool",
					"description": "Retrieve used ticks of a v4 pool",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v4/{{$parameter[\"address\"]}}/ticks"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pools-v3/{address}/ticks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools V 3 Ticks"
					],
					"operation": [
						"Get Pools V 3 Ticks"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chainId",
			"description": "Chain ID of LP V3 ticks",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "chainId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools V 3 Ticks"
					],
					"operation": [
						"Get Pools V 3 Ticks"
					]
				}
			}
		},
		{
			"displayName": "GET /pools-v4/{address}/ticks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools V 3 Ticks"
					],
					"operation": [
						"Get Pools V 4 Ticks"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chainId",
			"description": "Chain ID of LP V4 ticks",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "chainId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools V 3 Ticks"
					],
					"operation": [
						"Get Pools V 4 Ticks"
					]
				}
			}
		},
];
