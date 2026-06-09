import type { INodeProperties } from 'n8n-workflow';

export const campaignsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Campaigns"
					]
				}
			},
			"options": [
				{
					"name": "Get Campaigns",
					"value": "Get Campaigns",
					"action": "Retrieve campaigns data",
					"description": "Retrieve campaigns data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/campaigns"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /campaigns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Campaigns"
					],
					"operation": [
						"Get Campaigns"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"description": "Chain ID of campaigns data",
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
						"Campaigns"
					],
					"operation": [
						"Get Campaigns"
					]
				}
			}
		},
];
