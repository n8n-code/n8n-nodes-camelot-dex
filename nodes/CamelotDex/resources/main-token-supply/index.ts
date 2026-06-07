import type { INodeProperties } from 'n8n-workflow';

export const mainTokenSupplyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Main Token Supply"
					]
				}
			},
			"options": [
				{
					"name": "Get Main Token Supply",
					"value": "Get Main Token Supply",
					"action": "Retrieve Main Token Supply data",
					"description": "Retrieve Main Token Supply data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/grail/circulating-supply"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /grail/circulating-supply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Main Token Supply"
					],
					"operation": [
						"Get Main Token Supply"
					]
				}
			}
		},
		{
			"displayName": "Item",
			"name": "item",
			"description": "Supply data item to query",
			"default": "",
			"type": "string",
			"required": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Main Token Supply"
					],
					"operation": [
						"Get Main Token Supply"
					]
				}
			}
		},
];
