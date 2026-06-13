import type { INodeProperties } from 'n8n-workflow';

export const chainsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Chains"
					]
				}
			},
			"options": [
				{
					"name": "Get Chains",
					"value": "Get Chains",
					"action": "Retrieve chains data",
					"description": "Retrieve chains data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chains"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /chains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chains"
					],
					"operation": [
						"Get Chains"
					]
				}
			}
		},
];
