import type { INodeProperties } from 'n8n-workflow';

export const campaignsHealthDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Campaigns Health"
					]
				}
			},
			"options": [
				{
					"name": "Get Campaigns Health",
					"value": "Get Campaigns Health",
					"action": "Retrieve health data for campaigns",
					"description": "Retrieve health data for campaigns",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/campaigns/health"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /campaigns/health",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Campaigns Health"
					],
					"operation": [
						"Get Campaigns Health"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"description": "Chain ID of campaigns health data",
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
						"Campaigns Health"
					],
					"operation": [
						"Get Campaigns Health"
					]
				}
			}
		},
];
