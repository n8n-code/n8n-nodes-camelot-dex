import type { INodeProperties } from 'n8n-workflow';

export const rewardsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Rewards"
					]
				}
			},
			"options": [
				{
					"name": "Get Rewards",
					"value": "Get Rewards",
					"action": "Retrieve rewards data",
					"description": "Retrieve rewards data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/campaigns/rewards"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /campaigns/rewards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rewards"
					],
					"operation": [
						"Get Rewards"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"description": "Chain ID of rewards data",
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
						"Rewards"
					],
					"operation": [
						"Get Rewards"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "user",
			"required": true,
			"description": "User address",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rewards"
					],
					"operation": [
						"Get Rewards"
					]
				}
			}
		},
		{
			"displayName": "All Rewards",
			"name": "allRewards",
			"description": "Also display already claimed rewards",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "allRewards",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rewards"
					],
					"operation": [
						"Get Rewards"
					]
				}
			}
		},
];
