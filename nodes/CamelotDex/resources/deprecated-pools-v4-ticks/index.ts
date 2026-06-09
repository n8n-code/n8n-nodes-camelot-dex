import type { INodeProperties } from 'n8n-workflow';

export const deprecatedPoolsV4TicksDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Deprecated Pools v4 Ticks"
					]
				}
			},
			"options": [
				{
					"name": "Get Pools v4 Migration Ticks",
					"value": "Get Pools v4 Migration Ticks",
					"action": "Retrieve used ticks of a deprecated v4 pool",
					"description": "Retrieve used ticks of a deprecated v4 pool",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools-v4-migration/{{$parameter[\"address\"]}}/ticks"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pools-v4-migration/{address}/ticks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Deprecated Pools v4 Ticks"
					],
					"operation": [
						"Get Pools v4 Migration Ticks"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"description": "Chain ID of deprecated LP V4 ticks",
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
						"Deprecated Pools v4 Ticks"
					],
					"operation": [
						"Get Pools v4 Migration Ticks"
					]
				}
			}
		},
];
