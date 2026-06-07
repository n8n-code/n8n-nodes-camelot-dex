import type { INodeProperties } from 'n8n-workflow';

export const pointsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Points"
					]
				}
			},
			"options": [
				{
					"name": "Get Points",
					"value": "Get Points",
					"action": "Retrieve points data",
					"description": "Retrieve points data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/campaigns/points"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /campaigns/points",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Points"
					],
					"operation": [
						"Get Points"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chainId",
			"description": "Chain ID of points data",
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
						"Points"
					],
					"operation": [
						"Get Points"
					]
				}
			}
		},
		{
			"displayName": "Proxy",
			"name": "proxy",
			"required": true,
			"description": "Proxy points token address",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "proxy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Points"
					],
					"operation": [
						"Get Points"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Returns data only",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Points"
					],
					"operation": [
						"Get Points"
					]
				}
			}
		},
];
