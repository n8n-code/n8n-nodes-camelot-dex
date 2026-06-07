import type { INodeProperties } from 'n8n-workflow';

export const poolsV2Description: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pools V 2"
					]
				}
			},
			"options": [
				{
					"name": "Get Pools V 2",
					"value": "Get Pools V 2",
					"action": "Retrieve V2 liquidity pools data",
					"description": "Retrieve V2 liquidity pools data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v2"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pools-v2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools V 2"
					],
					"operation": [
						"Get Pools V 2"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chainId",
			"description": "Chain ID of LP V2 data",
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
						"Pools V 2"
					],
					"operation": [
						"Get Pools V 2"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"description": "Filter active pools",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "active",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pools V 2"
					],
					"operation": [
						"Get Pools V 2"
					]
				}
			}
		},
];
