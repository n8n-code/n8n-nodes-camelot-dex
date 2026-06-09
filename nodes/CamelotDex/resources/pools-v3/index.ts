import type { INodeProperties } from 'n8n-workflow';

export const poolsV3Description: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pools v3"
					]
				}
			},
			"options": [
				{
					"name": "Get Pools v3",
					"value": "Get Pools v3",
					"action": "Retrieve V3 liquidity pools data",
					"description": "Retrieve V3 liquidity pools data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v3"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pools-v3",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools v3"
					],
					"operation": [
						"Get Pools v3"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"description": "Chain ID of LP V3 data",
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
						"Pools v3"
					],
					"operation": [
						"Get Pools v3"
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
						"Pools v3"
					],
					"operation": [
						"Get Pools v3"
					]
				}
			}
		},
];
