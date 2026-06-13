import type { INodeProperties } from 'n8n-workflow';

export const salesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sales"
					]
				}
			},
			"options": [
				{
					"name": "Get Sales",
					"value": "Get Sales",
					"action": "Retrieve token sales data",
					"description": "Retrieve token sales data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sales"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sales",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sales"
					],
					"operation": [
						"Get Sales"
					]
				}
			}
		},
		{
			"displayName": "Chain ID",
			"name": "chainId",
			"description": "Chain ID to filter sales",
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
						"Sales"
					],
					"operation": [
						"Get Sales"
					]
				}
			}
		},
];
