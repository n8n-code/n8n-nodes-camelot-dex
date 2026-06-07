import type { INodeProperties } from 'n8n-workflow';

export const analyticsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					]
				}
			},
			"options": [
				{
					"name": "Get Analytics",
					"value": "Get Analytics",
					"action": "Retrieve analytics for every supported chain",
					"description": "Retrieve analytics for every supported chain",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/analytics"
						}
					}
				},
				{
					"name": "Get Analytics Aggregated",
					"value": "Get Analytics Aggregated",
					"action": "Retrieve aggregated analytics for every supported chain",
					"description": "Retrieve aggregated analytics for every supported chain",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/analytics/aggregated"
						}
					}
				},
				{
					"name": "Get Analytics Per Chain",
					"value": "Get Analytics Per Chain",
					"action": "Retrieve analytics for the given chain",
					"description": "Retrieve analytics for the given chain",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/analytics/{{$parameter[\"chainId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "GET /analytics/aggregated",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Analytics Aggregated"
					]
				}
			}
		},
		{
			"displayName": "GET /analytics/{chainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Analytics Per Chain"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chainId",
			"required": true,
			"description": "Chain ID of analytics to retrieve. Leave empty to get all chains.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics"
					],
					"operation": [
						"Get Analytics Per Chain"
					]
				}
			}
		},
];
