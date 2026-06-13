import type { INodeProperties } from 'n8n-workflow';

export const analytics24HDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics 24 H"
					]
				}
			},
			"options": [
				{
					"name": "Get Analytics 24 H",
					"value": "Get Analytics 24 H",
					"action": "Retrieve 24h analytics for every supported chain",
					"description": "Retrieve 24h analytics for every supported chain",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/analytics/24h"
						}
					}
				},
				{
					"name": "Get Analytics 24 H Aggregated",
					"value": "Get Analytics 24 H Aggregated",
					"action": "Retrieve last 24h aggregated analytics for every supported chain",
					"description": "Retrieve last 24h aggregated analytics for every supported chain",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/analytics/24h/aggregated"
						}
					}
				},
				{
					"name": "Get Analytics 24 H Per Chain",
					"value": "Get Analytics 24 H Per Chain",
					"action": "Retrieve last 24h analytics for the given chain",
					"description": "Retrieve last 24h analytics for the given chain",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/analytics/24h/{{$parameter[\"chainId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /analytics/24h",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics 24 H"
					],
					"operation": [
						"Get Analytics 24 H"
					]
				}
			}
		},
		{
			"displayName": "GET /analytics/24h/aggregated",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics 24 H"
					],
					"operation": [
						"Get Analytics 24 H Aggregated"
					]
				}
			}
		},
		{
			"displayName": "GET /analytics/24h/{chainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics 24 H"
					],
					"operation": [
						"Get Analytics 24 H Per Chain"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"required": true,
			"description": "Chain ID of last 24h analytics to retrieve.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Analytics 24 H"
					],
					"operation": [
						"Get Analytics 24 H Per Chain"
					]
				}
			}
		},
];
