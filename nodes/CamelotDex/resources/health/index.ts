import type { INodeProperties } from 'n8n-workflow';

export const healthDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					]
				}
			},
			"options": [
				{
					"name": "Get Health",
					"value": "Get Health",
					"action": "Retrieve protocol health for one or all chains",
					"description": "Retrieve protocol health for one or all chains",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /health",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health"
					],
					"operation": [
						"Get Health"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"description": "Optional: Chain ID of protocol health. If omitted, returns health for all chains.",
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
						"Health"
					],
					"operation": [
						"Get Health"
					]
				}
			}
		},
];
