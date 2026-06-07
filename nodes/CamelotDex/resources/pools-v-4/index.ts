import type { INodeProperties } from 'n8n-workflow';

export const poolsV4Description: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pools V 4"
					]
				}
			},
			"options": [
				{
					"name": "Get Pools V 4",
					"value": "Get Pools V 4",
					"action": "Retrieve V4 liquidity pools data",
					"description": "Retrieve V4 liquidity pools data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v4"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pools-v4",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools V 4"
					],
					"operation": [
						"Get Pools V 4"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chainId",
			"description": "Chain ID of LP V4 data",
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
						"Pools V 4"
					],
					"operation": [
						"Get Pools V 4"
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
						"Pools V 4"
					],
					"operation": [
						"Get Pools V 4"
					]
				}
			}
		},
];
